---
name: pressure-test
description: Pressure-test a business idea in the order that kills bad ideas fastest. The entry point for idea-audit — runs the kill screen, customer research and competitor scan in sequence and stops at the first failure. Use when assessing whether a business, product or side project is worth pursuing, or when a strategy needs stress-testing before commitment.
---

# Pressure-test a business idea

Run the phases in order. **Stop at the first phase that fails and report it.**
The value is in killing things cheaply, not in completing the analysis, and a
report that reaches Phase 5 on an idea that failed Phase 1 has wasted the
user's time in the most expensive possible way.

The order matters because the common failure is running it backwards: weeks of
supply-side and competitor research, frameworks producing a confident answer,
and no contact with a customer until the product exists. If the user asks to
start at a later phase, say what the earlier ones would have caught.

## Phase 0 — Kill screen

Run `/idea-audit:kill-screen`. Five questions, under an hour, and most ideas
end here. Do not proceed until it passes.

## Phase 1 — Demand

Before suppliers, before competitors, before architecture.

Run `/idea-audit:customer-research`. One question: **does anyone have this
problem, in their own words, recently?** It searches public sources itself and
returns a recruiting list, so nothing here is blocked on the user before the
conversations start.

If demand cannot be evidenced, stop — nothing downstream matters. An idea that
reaches Phase 4 with no customer quote behind it is an idea nobody has checked,
and you should say that rather than proceeding.

## Phase 2 — Who already exists

Run `/idea-audit:competitor-scan`. Complete the map before positioning against
it: direct competitors, specialists, generalists moving in, free and DIY
alternatives, aggregators, and general-purpose AI.

Then ask the substitute question specifically. Not "who are the competitors"
but **"what does this person do today?"** — including doing nothing, using
something free, or using something they already pay for.

Price the substitute as the customer experiences it. Then name the scenario
where this idea loses, and state it plainly. Most ideas have one; if you cannot
find it, say the examination is incomplete rather than reporting that none
exists.

## Phase 3 — Defensibility

"Nobody does this" is not a moat. Ask why not, and whether the reason persists.

The strongest answer is **incentive misalignment**: something the incumbent is
structurally unwilling to build because it costs them revenue. Telling a
customer "we cannot help you" reduces conversion, so companies paid on
conversion do not build it. That survives being noticed, which novelty does
not.

Weaker but real: switching costs, accumulating proprietary data, network
effects, a licence held, a brand in a trust-critical category, or a market too
small to be worth an incumbent's attention.

Then ask whether the component is **commoditising**. Anything drifting toward
utility — suppliers becoming self-serve and interchangeable — is a poor place
to build durable margin however attractive it looks today, and you should raise
it even when the current numbers work.

## Phase 4 — Channel

Usually the binding constraint, and usually assumed rather than solved. Treat a
missing channel as a problem for now, not for launch: a good idea nobody can be
reached about is worth less than a mediocre one aimed at people who already
listen to the founder.

- **Does the founder already have access to an audience?** If so, ask whether
  that audience should be picking the idea rather than the reverse. Raise this
  explicitly — founders rarely volunteer it, and it inverts the usual order.
- Is the search space already held by better-resourced operators?
- Are the customers **enumerable**? A list that can be worked through beats any
  amount of content strategy.
- Does a free, targeted channel exist — a community where the problem is
  already discussed?
- Paid channels: what does one customer cost, and can the unit economics carry
  it? Commission-only affiliate deals compete against whatever incumbents
  already pay, and an unproven brand offers worse expected earnings at the same
  rate — so they select for the partners with the least to lose.

Being cited in AI answers is largely a third-party-page phenomenon, so a
community presence and AI visibility are usually the same work rather than two
line items.

## Phase 5 — Frameworks, last

Use these to *articulate* a position already evidenced, never to discover one.
A framework applied to the findings of Phases 1–4 is a summary; applied before
them it manufactures confidence. See
[`frameworks.md`](frameworks.md) for how to run each and where
each misleads.

- **Rumelt's kernel** — diagnosis, guiding policy, coherent action. The best
  test of whether a strategy is a strategy or a slogan.
- **7 Powers** — the sharper tool for "is this defensible?"
- **Jobs to be Done** — what is the customer hiring this to do?
- **Porter's Five Forces** — industry-average and static. Useful for describing
  whether a sector is profitable, weak for deciding a position. State its
  limits whenever you use it.
- **Porter's generic strategies** — the cost/differentiation against
  broad/narrow matrix. Use it to *state* a position, never to find one: an
  empty cell is not a gap, and the matrix cannot distinguish a cell nobody has
  reached from a cell that is not viable.
- **SWOT** — widely understood, analytically the weakest here. It invites
  symmetry and produces lists rather than decisions. Use it to communicate a
  conclusion, never to reach one.

## Output

A short document, not a deck:

1. **The diagnosis** — what is actually going on, in one paragraph
2. **Evidence** — what was observed, quoted, with dates
3. **Assumptions** — every load-bearing claim with no evidence behind it
4. **The scenario where this loses**
5. **Verdict** — proceed, proceed with named risks, or stop
6. **The cheapest next test**, with its stop condition fixed in advance

Label inference as inference. When a conclusion rests on a marketing page
rather than documentation, say which.

## Anti-patterns

Check the report against these before delivering it.

- Supply-side research before demand evidence
- Treating a framework's output as a finding
- Trusting undated sources, or any source at all about a perishable fact
- Assuming the competitor is the substitute
- Positioning before the market map is complete — Porter's on a partial list is
  confidently wrong, and the classic result is proposing a differentiator that
  a specialist already sells
- Skipping "does a chatbot already do this?"
- Asking the gating questions last
- Switching ideas to escape a channel problem — the next idea usually has the
  same channel problem plus harder ones, and this is worth saying out loud when
  a user pivots mid-analysis
- Continuing on an idea the user has stopped believing in. A plan that needs
  weeks of unpaid effort cannot run on low conviction, and noticing that aloud
  is more useful than another phase of analysis.
