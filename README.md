# idea-audit

**Pressure-test a business idea before you build it.** Runs in Claude Code as a
plugin, or in the Claude app as a skill.

Describe an idea and it does the research with you: finds everyone who already
solves the problem, reads what customers actually say about it in public,
checks whether a supplier or platform will even take you at your size, and
prices the incumbent. Then it tells you whether to stop.

It is built to say no. Most ideas die from something cheap to check, and most
people check it last — so this flips the order. The cheapest way to kill the
idea goes first, and the frameworks that make an idea sound defensible go last,
with their limits stated.

## Install

### Claude Code

```
/plugin marketplace add stretch0/idea-audit
/plugin install idea-audit@idea-audit
```

The marketplace and the plugin share a name, so `idea-audit@idea-audit` is
correct and not a typo.

To try it without installing, clone the repo and point Claude Code at it:

```bash
git clone https://github.com/stretch0/idea-audit
claude --plugin-dir ./idea-audit/plugins/idea-audit
```

### Claude app (claude.ai)

Open **Customize → Plugins → + → Add marketplace**, enter `stretch0/idea-audit`,
then install `idea-audit` from the catalogue. Same plugin, same four skills.

Works on the mobile apps as well as the web.

## What it looks like

You get evidence and a verdict, not encouragement:

> **1. Critical dependency** — the payments API is self-serve, test keys in
> minutes. ✓
> **2. Licence** — regulated above a volume threshold; below it the platform's
> own model covers you. ⚠ named risk
> **3. Incumbent margin** — two established tools ship this at £25/month.
> Thin, but not zero.
> **4. Chatbot test** — a model drafts the output adequately but cannot track
> or send it. Survives.
> **5. What they already own** — the accounting software most of these
> customers already pay for has this built in, free. ✗
>
> **Verdict: proceed with a named risk.** The substitute in question 5 is the
> real competitor, not the paid tools in question 3.

## Skills

### Start here

```
/idea-audit:pressure-test a subscription box for X, aimed at Y
```

`pressure-test` is the orchestrator, and the only one you need to remember. It
runs the other three in the order that kills bad ideas fastest and **stops at
the first phase that fails** — so most runs never reach the end, which is the
point.

| Phase | What runs | Ends the idea when |
| --- | --- | --- |
| 0 | `kill-screen` | A gating question fails — no supply, no licence, no margin |
| 1 | `customer-research` | Nobody can be shown to have the problem |
| 2 | `competitor-scan` | Somebody already sells the differentiator |
| 3–4 | Defensibility and channel, inline | No moat, or no way to reach anyone |
| 5 | `frameworks.md` | — frameworks describe a position, they never rescue one |

The phases load as they are reached, not all at once, so a run that stops at
Phase 0 never reads the rest.

### Running one on its own

Each phase is also a skill in its own right, for when you already know which
question you have:

| Skill | Use it when |
| --- | --- |
| `/idea-audit:kill-screen` | You have an idea. Five gating questions, under an hour, most ideas end here |
| `/idea-audit:customer-research` | You need to know whether anyone has the problem, before building |
| `/idea-audit:competitor-scan` | Before positioning — find everyone who already solves this, including the free and DIY ones |

Claude will also reach for any of these on its own when you describe an idea or
ask whether something is worth pursuing. In the Claude app there are no slash
commands — say "pressure-test this idea: ..." and it picks the skill up from
there.

`customer-research` does the public-source searching itself, then hands back a
list of named people who posted about the problem recently — and will coach you
through the conversations question by question if you paste the answers back,
correcting leading questions as you go.

## The order of operations

1. **Cheap kill criteria first.** Before any research, write down what would
   make you walk away — the regulation that bans it, the unit economics that
   never close, the incumbent who ships it as a free feature. Then check those
   first. A day of work that kills a bad idea is the best return in the whole
   process.
2. **Demand evidence before you build the thing.** Prove someone wants it, and
   will pay, before wiring up whatever delivers it. Signed intent, pre-orders,
   a waitlist that converts — evidence that costs the customer something.
   "People said they'd use it" is not evidence.
3. **Map the market before positioning against it.** A positioning framework
   run on an incomplete list of players returns a confident answer about a
   market that isn't there. The expensive version is proposing as your
   differentiator something a specialist already sells.
4. **Strategy frameworks last, and with their limits stated.** Porter,
   jobs-to-be-done, TAM/SAM/SOM and the rest are useful for structuring an
   argument and terrible at testing one. They are applied at the end, to an
   idea that already survived, and every framework used is accompanied by what
   it cannot tell you.

The five gating questions behind step 1 are in
[`kill-screen`](plugins/idea-audit/skills/kill-screen/SKILL.md). The short
version: can you get your critical dependency, is it regulated, does an
incumbent's price leave any margin, does a chatbot already do this, and what
does the customer already own that solves it.

## Where it came from

Running a side project into the ground the slow way: weeks of research into
suppliers, competitors and architecture, a confident Porter's read, and no
contact with an actual customer until after the product was built. The demand
evidence, when it finally arrived, took an afternoon and changed the answer.

The same screen, applied afterwards to two other ideas, killed both in under an
hour.

## What's underneath

The skills are not neutral. The question discipline in `customer-research` is
The Mom Test applied; the defensibility test is 7 Powers; the strategy check is
Rumelt's kernel; the demand question is Jobs to be Done. Those are built in as
instructions, not offered as a reading list.

[`reference/frameworks.md`](plugins/idea-audit/skills/pressure-test/frameworks.md) is the
operational note the agent loads when it needs one: how to run each framework,
what output it must produce, and what it cannot tell you.

## License

[MIT](LICENSE) — use it, change it, ship it.
