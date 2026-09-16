# idea-audit

**A Claude Code plugin that pressure-tests a business idea before you build it.**

Describe an idea and it does the research with you: finds everyone who already
solves the problem, reads what customers actually say about it in public,
checks whether a supplier or platform will even take you at your size, and
prices the incumbent. Then it tells you whether to stop.

It is built to say no. Most ideas die from something cheap to check, and most
people check it last — so this flips the order. The cheapest way to kill the
idea goes first, and the frameworks that make an idea sound defensible go last,
with their limits stated.

## Install

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

| Skill | Use it when |
| --- | --- |
| `/idea-audit:kill-screen` | You have an idea. Five gating questions, under an hour, most ideas end here |
| `/idea-audit:competitor-scan` | Before positioning — find everyone who already solves this, including the free and DIY ones |
| `/idea-audit:customer-research` | You need to know whether anyone has the problem, before building |
| `/idea-audit:pressure-test` | Full assessment, phases in the order that kills bad ideas fastest |

Claude will also reach for these on its own when you describe an idea or ask
whether something is worth pursuing.

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

## Reference

- [`frameworks.md`](plugins/idea-audit/reference/frameworks.md) — Porter's,
  SWOT, Rumelt's kernel, 7 Powers, JTBD, evolution mapping, and where each one
  misleads
- [`reading.md`](plugins/idea-audit/reference/reading.md) — the short list,
  ordered by what each book fixes

## License

Not yet chosen.
