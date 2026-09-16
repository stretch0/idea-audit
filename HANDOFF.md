# Handoff

Context for a fresh Claude Code session picking this up. Delete this file once
the work below is done — it is not part of the published plugin.

## What this is

A Claude Code plugin that pressure-tests a business idea before you build it.
The repo doubles as its own plugin marketplace, so it installs in two commands.

**Repo:** https://github.com/stretch0/idea-audit — pushed, `main`.
**State:** complete and passing `claude plugin validate .`

## Do these first

### 1. Read the README, then check it still validates

The rename to `idea-audit` and both descriptions are already applied, and the
repo is pushed. Confirm nothing is broken:

```bash
claude plugin validate .
```

### 2. Update the two descriptions

They are different fields for different audiences.

**GitHub repo description** (shows in search):

> Claude Code plugin for pressure-testing a business idea before you build it —
> cheap kill criteria, competitor discovery and demand evidence, with the
> strategy frameworks last.

**`plugin.json` description** (shows when browsing `/plugin` in Claude Code) —
should carry the literal keywords people scan for:

> Pressure-test a business idea before building it: competitor analysis, market
> research, demand validation, and cheap kill criteria that end most ideas in
> under an hour. Frameworks last, with their limits stated.

**GitHub topics:** `claude-code`, `claude-code-plugin`, `business-strategy`,
`market-research`, `competitor-analysis`, `customer-discovery`,
`product-validation`, `startup-tools`, `idea-validation`, `mom-test`

### 3. Confirm the push

```bash
# already done — the remote is set and main is pushed
git log --oneline
```

### 4. Verify it installs

```bash
/plugin marketplace add stretch0/idea-audit
/plugin install idea-audit@idea-audit
```

Or locally, without installing: `claude --plugin-dir ./plugins/idea-audit`

## Why it exists

It came out of building and then killing a side project — an eSIM reseller for
cruise travellers — the slow way. That history is the source of every rule in
here, so preserve the reasoning even if you rewrite the prose.

What went wrong, in order:

1. **Supply-side research ran for weeks before anyone read a customer's words.**
   Aggregator APIs, unit economics, OS-level install constraints, competitor
   pricing — all solid, none of it the thing that decides. The first demand
   evidence arrived *after* the product was built, took an afternoon, and
   changed the answer.
2. **A framework's output was mistaken for a finding.** Porter's Five Forces
   said the niche was underserved. It is industry-average, static, silent on
   demand, and assumes your constraint is capital rather than distribution.
3. **The market map was incomplete, so the positioning was confident and
   wrong.** The brief proposed bundled land-and-sea connectivity as a
   differentiation opportunity "worth investigating". A specialist was already
   selling exactly that across 280+ ships. It also missed a well-funded
   generalist that entered within the year, the affiliate content layer that
   owned the search results, and general-purpose AI — a traveller in a recent
   forum thread solved the exact problem the product existed to solve by asking
   a chatbot.
4. **The gating questions were asked last.** "Will a supplier onboard a
   pre-revenue project?" should have been first. When the same screen was later
   applied to two alternative ideas, it killed both in under an hour.

The fuller write-up lives in the other repo at `stretch0/wayfarer`, in
`docs/decision-log.md`, `docs/customer-research.md`,
`docs/competitive-landscape.md` and `docs/aggregator-spike.md`.

## What is in it

```
.claude-plugin/marketplace.json      repo is its own marketplace
README.md
plugins/idea-audit/
  .claude-plugin/plugin.json
  skills/
    kill-screen/SKILL.md             5 gating questions, under an hour
    competitor-scan/SKILL.md         find everyone, before positioning
    customer-research/SKILL.md       Mom Test + listening in public
    pressure-test/SKILL.md           full sequence, phases in order
  reference/
    frameworks.md                    Porter's, SWOT, Rumelt, 7 Powers, JTBD,
                                     evolution — and where each misleads
    reading.md                       short book list, ordered by what it fixes
```

## Decisions worth preserving

- **Order is the product.** Kill screen → demand → market map → defensibility →
  channel → frameworks. Most of the value is in the sequence, not the content.
- **Frameworks come last and carry their limits.** Porter's has five stated
  weaknesses, including that it is only as good as your list of players. SWOT is
  included because it is widely understood and marked as the weakest.
- **"Does a chatbot already answer this?" is a first-class kill criterion.**
  New, and decisive for anything whose value is matching, comparison or
  explanation.
- **"Nobody does this" is a claim to disprove**, never an assumption.
- **Findings have shelf lives.** Emotional friction lasts years; a specific
  competitive gap perishes in weeks. `customer-research` has the table.
- **Evidence over reasoning.** "Their pricing page says X" beats "presumably
  they would" everywhere in these skills.
- The worked examples are real and should stay concrete rather than becoming
  generic illustrations.

## Optional, later

- Submit to the community marketplace at
  `platform.claude.com/plugins/submit`. `claude plugin validate .` is the same
  check their review pipeline runs, and it already passes.
- `npm` is a supported plugin source, so the plugin could be published as a
  package and referenced from the marketplace with
  `"source": {"source": "npm", "package": "..."}`. Only worth it if you also
  want it consumable outside Claude Code.
- Consider `claude plugin eval` to measure whether Claude actually reaches for
  these skills and gets useful results.
