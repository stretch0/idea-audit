---
name: customer-research
description: Find out whether anyone actually has the problem, using public evidence and Mom Test question discipline. Searches public sources first, then coaches the user through real conversations question by question. Use when validating demand, before building, or when an idea rests on an assumption about what customers want or do.
---

# Customer research

Answer one question: **does anyone have this problem, in their own words,
recently?** It is the cheapest research available and almost always gets done
last.

Do as much as possible yourself before asking the user for anything. Stages 1
to 3 need nothing from them. Stage 4 is the part only they can do, and your job
there is to steer it live rather than hand over a document.


## Stage 1 — Search, in parallel

Unprompted public discussion beats interviews, because nobody was performing
for an interviewer. Start there.

If subagents are available, fan out — one per source class, dispatched in a
single message so they run concurrently:

- Forums and subreddits where the problem is discussed
- Review sections and app-store reviews of the incumbents, one- and two-star
  first
- Question sites and support communities
- The frequency count (below), run as its own search
- A chatbot given the customer's literal question, to see whether the problem
  is already adequately answered

Give every subagent the same extraction contract, and enforce it on return:

> Return verbatim quotes with a URL and a date for each. Do not summarise, do
> not characterise the sentiment, do not aggregate. A quote you cannot link and
> date does not count.

That contract is the whole point of the fan-out. A subagent that returns "users
find this frustrating" has destroyed the evidence, and the copy, and the
dates. Send it back rather than working from it.

From each thread extract exactly three things:

- **What they did** — the behaviour, not the stated preference
- **What it cost them** — money, time, or a bad day
- **Their exact words**, verbatim — these become the marketing copy later

Quote the emotional register in full when it appears. "I've been putting this
off", "I feel stupid", "I was scared of the bill" are stronger signals than any
feature request.

### Vendor copy is not customer evidence

A search for people describing a problem returns, near the top, marketing
written to sound exactly like people describing that problem. Testimonials,
case studies, landing-page headlines and "why we built this" posts are
engineered from the same emotional register you are hunting for, which is
precisely what makes them dangerous.

Check the source of every quote before it enters the record, and say which side
of the line it fell on. A competitor's testimonial is evidence that **they** are
betting on the problem — worth knowing, and a fair prompt for a question — but
it is a hypothesis somebody is selling, not a customer speaking unprompted.
Never quote it as demand.

### Date every finding

Shelf life varies enormously. State the age of each finding rather than
presenting them as one body of evidence:

| Finding | Shelf life |
| --- | --- |
| Emotional friction, confusion | Years |
| Prices | Months |
| Which competitor is best | Months |
| A specific gap or missing feature | Weeks — someone may have closed it |

Re-check the perishable ones. A two-year-old thread is evidence the problem
*existed*, and must be reported as that, never as current demand.

### Count the frequency

Existence is not volume. Search the key term, sort by newest, and report a
rate: posts per week, and how far back page one reaches.

Count threads, not posts. One long thread generates many mentions and will
overstate the population.

### Say what you could not reach

Large forums often block automated fetches. Name the sources you could not
read, and use a browser tool if one is available. A thinner result reported as
a complete one is worse than no result.

### A null result is a claim, and needs the same evidence

"I searched and found nobody discussing this" is usually the single
highest-stakes sentence in the whole audit, because it kills the idea. Never
report it bare. State the communities searched, the exact terms used, and the
date range covered, so the user can see whether the search was wrong rather
than the market.

Absence found in three obvious communities is weak. Absence found across the
places where this customer demonstrably congregates, in their own vocabulary,
is strong — and the difference is invisible unless you show the searches. If
you could not identify where these people gather, say that instead: it is a
different and more recoverable finding than silence.

## Stage 2 — Build the recruiting list

The threads from Stage 1 are not only evidence. They are named people who have
the problem, posting in public, recently.

Produce a list the user can work through: where each person was found, what
they said, when, and the one thing worth asking them. Sort by recency and by
how specific their complaint was.

This is usually the most immediately useful artefact of the whole skill, and it
costs nothing extra once Stage 1 is done. Do not skip it and tell the user to
"find some customers".

## Stage 3 — Draft the questions, tailored

Generic question lists produce generic answers. Write the actual questions for
*this* idea, each one aimed at a specific claim Stage 1 surfaced or failed to
surface.

Apply these substitutions, and keep applying them to anything the user
proposes:

| Don't ask | Ask instead |
| --- | --- |
| "Would you use a tool that…" | "What did you do last time?" |
| "Is X hard?" | "Walk me through how you decided." |
| "Would you pay £N?" | "What did it end up costing you?" |
| "Is this a good idea?" | "What was annoying about it?" |

Everything past tense, everything specific, nothing about the product. The
follow-ups matter more than the openers: *"What did you try before that?"*,
*"Who told you to do it that way?"*, *"How long did that take?"*

Tell the user to start with whoever is easiest to reach. The first three
conversations will be badly run and it is better to be bad at them cheaply.

### Fix the stop condition now

Before the first conversation, get the user to commit to what result means
stop. Without it they will rationalise whatever they find, and so will you when
reporting it.

A workable default: *if nobody asks to buy within N conversations, stop*. One
person asking "where do I get this" outweighs a hundred anonymous approvals.
Patterns usually appear between ten and fifteen conversations.

## Stage 4 — Steer the conversations, live

Offer both, and let the user pick:

- **Live steering** — they paste each answer as it comes in, or after each
  conversation, and you direct the next question.
- **Rehearsal** — you play a customer from the Stage 1 quotes, in that person's
  own register, and let the user practise. Break character only to flag a
  leading question.
- **The handout** — Stages 2 and 3 as a document, if they have no time. Say
  what they lose: the steering is where most of the value is, because the
  mistakes repeat.

When steering, respond to each answer with four things and nothing else:

1. **Grade the question they asked.** If it was hypothetical, leading, or about
   the product, say so and give the replacement wording. Do this first and do
   it every time — the same mistake recurs across all their conversations, and
   correcting it early compounds.
2. **Extract** what the answer actually yielded: behaviour, cost, exact words,
   commitment signal. Name which of the four are still missing.
3. **Name the specific unknown** that matters most now.
4. **Give the literal next question**, one sentence, past tense.

Two rules that hold absolutely:

- **Never supply an answer the user did not get.** If they paraphrase, ask for
  the verbatim wording. Do not fill a gap with plausible customer language, and
  do not let an invented quote enter the record. This is the one failure that
  makes the whole exercise worse than not doing it.
- **Track the stop condition out loud.** Report the count against it every few
  conversations, unprompted.

### Score commitment, not enthusiasm

The currency is anything that costs the other person something:

- They hand over contact details unprompted
- They introduce someone else with the problem
- They spend real time on it
- **They have already spent money trying to solve it** — the strongest signal

"Great idea", "I'd definitely use that", and "let me know when it launches"
with no contact details are noise. Say so when they are offered as results,
including when the user is clearly pleased with them.

## Output

- Verbatim quotes with dates and links, grouped by what they evidence
- The frequency count, with its method stated
- The recruiting list, with what to ask each person
- Conversation notes, verbatim, with a commitment score each and a note of
  whether the person was a stranger or a warm introduction
- Observation separated from inference, explicitly labelled
- Every load-bearing claim still resting on no evidence
- The findings that hurt — first, not last. They are the ones that change the
  decision, and a summary that buries them has failed at the only thing this
  skill is for.

## Where this method misleads

State the relevant ones in the report; none of them is a reason not to run it.

- It interrogates past behaviour, so it is weakest exactly where there is none.
  In a genuinely new category, "nobody has tried to solve this" reads
  identically to "nobody wants this" — and is sometimes the opportunity.
- It establishes that a problem exists, not how many people have it. Ten strong
  conversations and a total market of five hundred people look the same.
- Commitment signals inflate with social proximity. A friend hands over contact
  details cheaply, so the currency is worth less from a warm introduction than
  from a stranger, and the report must say which it was.
- It is a filter tuned against false positives and it will discard some true
  ones. That is the intended trade, and worth restating when a founder is
  disappointed by the result.

**Failure mode:** reporting "strong demand signal" from conversations the
founder sourced entirely from their own network, or from a sample too small to
say anything about volume.
