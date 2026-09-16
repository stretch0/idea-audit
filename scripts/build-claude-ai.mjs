#!/usr/bin/env node
/**
 * Generates the claude.ai bundle from the Claude Code plugin.
 *
 * The plugin is the source of truth. It relies on two things claude.ai skills
 * do not have: skills invoking other skills by slash command, and a reference
 * file shared from outside the skill folder. Both have to be flattened, so the
 * four skills become one self-contained folder — pressure-test as SKILL.md,
 * the rest as files beside it that SKILL.md tells the agent to read.
 *
 *   node scripts/build-claude-ai.mjs           write dist/
 *   node scripts/build-claude-ai.mjs --check   fail if dist/ is stale
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const plugin = join(root, 'plugins', 'idea-audit');
const out = join(root, 'dist', 'claude-ai', 'idea-audit');

const NOTE =
  '<!-- Generated from plugins/idea-audit by scripts/build-claude-ai.mjs. Edit the plugin, not this file. -->';

/** Slash-command calls become file references; the shared reference is local. */
function flatten(md) {
  return md
    .replace(/Run `\/idea-audit:([a-z-]+)`/g, 'Follow `$1.md`')
    .replace(/run `\/idea-audit:([a-z-]+)`/g, 'follow `$1.md`')
    .replace(/`\/idea-audit:([a-z-]+)`/g, '`$1.md`')
    .replace(/\.\.\/\.\.\/reference\/frameworks\.md/g, 'frameworks.md');
}

function splitFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) throw new Error('missing frontmatter');
  return { frontmatter: m[1], body: md.slice(m[0].length) };
}

const skill = (name) =>
  readFileSync(join(plugin, 'skills', name, 'SKILL.md'), 'utf8');

const files = {};

// pressure-test orchestrates, so it becomes the skill itself.
{
  const { body } = splitFrontmatter(skill('pressure-test'));
  const { description } = JSON.parse(
    readFileSync(join(plugin, '.claude-plugin', 'plugin.json'), 'utf8'),
  );
  files['SKILL.md'] =
    `---\nname: idea-audit\ndescription: ${description}\n---\n\n${NOTE}\n\n` +
    flatten(body).replace(
      /^# Pressure-test a business idea\n/m,
      '# Idea audit\n\nThe phases below reference `kill-screen.md`, `customer-research.md`,\n`competitor-scan.md` and `frameworks.md`, which are in this folder. Read each\nwhen its phase is reached, not before.\n',
    );
}

// The other three become supporting files: same content, no frontmatter.
for (const name of ['kill-screen', 'customer-research', 'competitor-scan']) {
  const { body } = splitFrontmatter(skill(name));
  files[`${name}.md`] = `${NOTE}\n\n${flatten(body).trimStart()}`;
}

files['frameworks.md'] =
  `${NOTE}\n\n` +
  flatten(readFileSync(join(plugin, 'reference', 'frameworks.md'), 'utf8'));

if (process.argv.includes('--check')) {
  const stale = Object.entries(files).filter(([name, content]) => {
    const path = join(out, name);
    return !existsSync(path) || readFileSync(path, 'utf8') !== content;
  });
  const extra = existsSync(out)
    ? readdirSync(out).filter((f) => !(f in files))
    : [];
  if (stale.length || extra.length) {
    console.error(
      'dist is stale. Run: node scripts/build-claude-ai.mjs\n' +
        [...stale.map(([n]) => `  changed: ${n}`), ...extra.map((n) => `  orphan:  ${n}`)].join('\n'),
    );
    process.exit(1);
  }
  console.log('dist is current');
} else {
  rmSync(out, { recursive: true, force: true });
  mkdirSync(out, { recursive: true });
  for (const [name, content] of Object.entries(files)) {
    writeFileSync(join(out, name), content);
  }
  console.log(`wrote ${Object.keys(files).length} files to dist/claude-ai/idea-audit/`);
}
