# idea-audit

Pressure-test a business idea before building it.

The premise: most ideas die from something cheap to check, and most people
check it last. This flips the order — the cheapest way to kill the idea goes
first, and the frameworks that make an idea sound defensible go last, with
their limits stated.

## The order of operations

1. **Cheap kill criteria first.** Before any research, write down what would
   make you walk away — the regulation that bans it, the unit economics that
   never close, the incumbent who ships it as a free feature. Then check those
   first. A day of work that kills a bad idea is the best return in the whole
   process.
2. **Demand evidence before supply integration.** Prove someone wants it, and
   will pay, before wiring up the thing that delivers it. Signed intent,
   pre-orders, a waitlist that converts — evidence that costs the customer
   something. "People said they'd use it" is not evidence.
3. **Strategy frameworks last, and with their limits stated.** Porter, jobs-to-
   be-done, TAM/SAM/SOM and the rest are useful for structuring an argument and
   terrible at testing one. They are applied at the end, to an idea that already
   survived, and every framework used is accompanied by what it cannot tell you.

One addition the process earned the hard way: **map the market before
positioning against it.** A positioning framework run on an incomplete list of
players returns a confident answer about a market that isn't there. The
expensive version is proposing as your differentiator something a specialist
already sells.

## Install

```
/plugin marketplace add stretch0/idea-audit
/plugin install idea-audit@idea-audit
```

Or try it without installing:

```bash
claude --plugin-dir ./plugins/idea-audit
```

## Skills

| Skill | Use it when |
| --- | --- |
| `/idea-audit:kill-screen` | You have an idea. Five gating questions, under an hour, most ideas end here |
| `/idea-audit:competitor-scan` | Before positioning — find everyone who already solves this, including the free and DIY ones |
| `/idea-audit:customer-research` | You need to know whether anyone has the problem, before building |
| `/idea-audit:pressure-test` | Full assessment, phases in the order that kills bad ideas fastest |

Claude will also reach for these on its own when you describe an idea or ask
whether something is worth pursuing.

## The five gating questions

1. **Can a pre-revenue operator get supply today, self-serve?** Ask first, not
   last — it invalidates everything downstream.
2. **Is there a licence?** And does the unlicensed route survive monetisation?
3. **Does an incumbent's price leave any margin?**
4. **Does a chatbot already answer this adequately?** New, and decisive for
   anything whose value is matching, comparison or explanation.
5. **What does the customer already own that solves this?** The substitute is
   rarely the obvious competitor.

## Where it came from

Running a side project into the ground the slow way: weeks of supplier
research, competitor analysis and architecture, a confident Porter's read, and
no contact with an actual customer until after the product was built. The
demand evidence, when it finally arrived, took an afternoon and changed the
answer.

The same screen, applied afterwards to two alternative ideas, killed both in
under an hour.

## Reference

- [`frameworks.md`](plugins/idea-audit/reference/frameworks.md) — Porter's,
  SWOT, Rumelt's kernel, 7 Powers, JTBD, evolution mapping, and where each one
  misleads
- [`reading.md`](plugins/idea-audit/reference/reading.md) — the short list,
  ordered by what each book fixes

## License

Not yet chosen.
