---
name: customer-research
description: Find out whether anyone actually has the problem, using public evidence and Mom Test question discipline. Use when validating demand, before building, or when an idea rests on an assumption about what customers want or do.
---

# Customer research

Answer one question: **does anyone have this problem, in their own words,
recently?** Everything else downstream depends on it, and it is the cheapest
research available.

The work splits in two. Part 1 you do yourself, now. Part 2 only the user can
do — your job there is to hand them a protocol they can run and a stop
condition they have agreed to in advance.

Read [`frameworks.md`](../../reference/frameworks.md) before reporting a
result: this method has known blind spots — notably that it cannot tell you how
many people have the problem — and the report must state the relevant ones.

## Part 1 — Listen, yourself, first

Go where the problem is already discussed unprompted: forums, subreddits,
review sections, support communities, question sites. Unprompted discussion
beats interviews, because nobody was performing for an interviewer.

Extract exactly three things per thread:

- **What they did** — the behaviour, not the stated preference
- **What it cost them** — money, time, or a bad day
- **Their exact words**, quoted verbatim — these become the copy later

Flag the emotional register when it appears. "I've been putting this off", "I
feel stupid", "I was scared of the bill" are stronger signals than any feature
request, and worth quoting in full.

### Date every finding

Shelf life varies enormously, so state the age of each finding rather than
presenting them as one body of evidence:

| Finding | Shelf life |
| --- | --- |
| Emotional friction, confusion | Years |
| Prices | Months |
| Which competitor is best | Months |
| A specific gap or missing feature | Weeks — someone may have closed it |

Re-check the perishable ones before reporting them. Sort by newest and say
plainly how old the stream is. A two-year-old thread is evidence the problem
*existed*, and must be reported as that and not as current demand.

### Count the frequency

Existence is not volume. Search the community for the key term, sort by newest,
and report a rate: posts per week, and how far back page one reaches.

Count threads, not posts. One long thread generates many mentions and will
overstate the population if you count them individually.

### When a source blocks you

Large forums often refuse automated fetches. Say which sources you could not
reach rather than quietly reporting a thinner result, and use a browser tool if
one is available.

## Part 2 — The protocol you hand the user

The founder's instinct is to describe the idea and ask whether people like it.
That produces compliments, which are worthless. Give them these substitutions
explicitly:

| Don't ask | Ask instead |
| --- | --- |
| "Would you use a tool that…" | "What did you do last time?" |
| "Is X hard?" | "Walk me through how you decided." |
| "Would you pay £N?" | "What did it end up costing you?" |
| "Is this a good idea?" | "What was annoying about it?" |

Everything past tense, everything specific, nothing about the product. Tell
them the follow-ups matter more than the openers: *"What did you try before
that?"*, *"Who told you to do it that way?"*, *"How long did that take?"*

Tell them to start with whoever is easiest to reach. The first three
conversations will be badly run and it is better to be bad at them cheaply.

### Score commitment, not enthusiasm

Give the user the scoring rule before they start, so they cannot grade their
own results generously afterwards. The currency is anything that costs the
other person something:

- They hand over contact details unprompted
- They introduce someone else with the problem
- They spend real time on it
- **They have already spent money trying to solve it** — the strongest signal

"Great idea", "I'd definitely use that", and "let me know when it launches"
with no contact details are noise. Say so when they are offered as results.

### Fix the stop condition in advance

Make the user write down what result means stop, before the first
conversation. Without it they will rationalise whatever they find, and so will
you when reporting it.

A workable default: *if nobody asks to buy within N conversations, stop*. One
person asking "where do I get this" outweighs a hundred anonymous approvals.
Patterns usually appear between ten and fifteen conversations.

## Output

- Verbatim quotes with dates and links, grouped by what they evidence
- The frequency count, with its method stated
- Observation separated from inference, explicitly labelled
- Every load-bearing claim still resting on no evidence
- The findings that hurt — report these first, not last. They are the ones that
  change the decision, and an upbeat summary that buries them has failed at the
  only thing this skill is for.
