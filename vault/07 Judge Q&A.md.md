# Judge Q&A Prep — APIDrift

**Created:** 2026-05-01
**Status:** Complete ✅

---

## Delivery Rules
- 30 seconds max per answer
- Name "IBM Bob" at least once per answer
- Lead with the direct answer; support with one specific example
- End every answer with a forward-looking statement

---

## Q1: "How do you know which layer is the source of truth when there's drift?"

**Answer:**
"IBM Bob reasons about intent, not just diffs. In our demo, Bob identified that the backend change to totalCents was intentional — integer cents is a well-known best practice for currency to avoid floating-point precision errors. The frontend and docs didn't have an intentional change, they just hadn't been updated. Bob looks at the semantics of the change, not just that a field name is different.

In production, we'd add explicit signals — like a commit message or a changelog entry — to help Bob confirm intent. But even without that, Bob's reasoning about which change makes engineering sense is more reliable than assuming any one layer is always right."

---

## Q2: "Isn't this just a TypeScript types problem? Couldn't strict typing prevent this?"

**Answer:**
"TypeScript helps within a single layer, but it doesn't span boundaries. You can have perfect TypeScript types on the frontend and perfect types on the backend — and they still drift if they're not generated from the same source of truth.

Most real teams don't auto-generate their frontend types from OpenAPI. They write them by hand, or copy them, or forget to update them. APIDrift using IBM Bob catches the drift that already exists in the real codebase — not the ideal codebase where everything is perfectly typed. It meets teams where they are."

---

## Q3: "Why does this need IBM Bob? Couldn't you do this with a simpler diff script?"

**Answer:**
"A diff script can tell you that 'paid' and 'PAID' are different strings. IBM Bob understands that this breaks every downstream equality check in the frontend. That's a semantic reasoning problem, not a string comparison problem.

Bob also synthesizes across multiple files simultaneously — frontend client, UI component, backend route, and OpenAPI spec — and reasons about which change was intentional versus accidental. A script finds differences. Bob understands what those differences mean and why they matter. That's the distinction."

---

## Q4: "What's your go-to-market? How do you sell this?"

**Answer:**
"Three phases. Immediate: developer communities — HackerNews, DevOps subreddits. Free tier: scan one repo for drift. Short-term: teams that have OpenAPI specs but no enforcement in CI — we slot in as a pre-merge check. Pitch: 'If APIDrift catches one integration bug before it ships, it paid for itself.'

Longer term, we integrate with GitHub Actions so drift is caught before the PR merges, not after the deploy. Monetization: per-seat SaaS for engineering teams, or per-repo for enterprise. The market is any team that moves fast and has frontend/backend written by different people."

---

## Q5: "How does this scale beyond one checkout endpoint? Real apps have hundreds of endpoints."

**Answer:**
"Our MVP demonstrates the concept with one scenario, but IBM Bob's repo-wide context means it can analyze any endpoint Bob can read. The drift matrix format scales — each row is a field, each column is a layer. We'd prioritize endpoints by change frequency or user impact.

For the hackathon, we proved the detection + fix + test loop works on a real drifted scenario. Production would add an OpenAPI parser to enumerate all endpoints and run Bob's analysis on each one. The hard problem was building the reasoning engine — and IBM Bob is that engine."

---

## Additional Likely Questions

| Question | Key Points |
|---|---|
| "What about GraphQL or gRPC?" | Schema-first protocols have less drift by design; REST is the highest-pain case. Bob can analyze any file type it can read. |
| "How do you handle drift introduced by a third-party API you don't control?" | Out of scope for MVP; APIDrift focuses on contracts you own. Third-party drift is a monitoring problem (different layer). |
| "Could Bob make the wrong fix recommendation?" | Yes — that's why we show the evidence trail and two options. Human approves before any code is merged. Bob generates; engineer decides. |
| "Why Next.js and not a simpler frontend?" | Fastest stack for a polished UI with server-side rendering; Havyn knows it cold. Speed of development matters in 48 hours. |
| "What makes this different from Spectral or other OpenAPI linting tools?" | Spectral lints the spec in isolation. APIDrift compares the spec against the actual running code. They catch different problems. |

---

## Q&A Practice Protocol

1. Read each answer out loud — time yourself (target: 30s)
2. Have someone ask questions in random order
3. Practice the pivot: if asked something off-script, say "Great question — [direct answer], and what makes this interesting for the hackathon theme is [tie back to 'turn idea into impact faster']"
4. Know the one number: "$NaN" and the one line: "Bob catches API drift before your users do"
