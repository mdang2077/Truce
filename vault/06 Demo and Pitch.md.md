# Demo and Pitch — APIDrift

**Created:** 2026-05-01
**Updated:** 2026-05-01 — Severity + business impact + ticket routing added
**Status:** Complete ✅ — paste-ready

---

## Demo Video Flow (Timed)

**Total: ~2:45**

| Step | Time | Action |
|---|---|---|
| 1. Broken checkout | 0:00–0:12 | Show $NaN and Unknown status; name the problem |
| 2. Scan trigger | 0:12–0:22 | Click "Scan for API Drift" |
| 3. Contract map | 0:22–0:35 | Show 3 cards (frontend / backend / OpenAPI) |
| 4. Drift matrix | 0:35–1:05 | Slow pan; severity badges; let judge read |
| 5. Bob evidence trail | 1:05–1:25 | Name IBM Bob; show 7-point chain |
| 6. Severity + impact | 1:25–1:38 | "High risk. Revenue-critical flow." |
| 7. Bob fix strategy | 1:38–1:50 | Recommend: update frontend + docs |
| 8. Patch + test | 1:50–2:15 | Code diff + contract test |
| 9. Ticket routing | 2:15–2:25 | Orchestrated action card |
| 10. Fixed checkout + PR | 2:25–2:45 | $84.70, Paid, PR summary, closing line |

---

## Full Narration Script

### [0:00–0:12] OPENING — THE BROKEN APP
*[Show checkout with $NaN and "Unknown" large and red]*

> "The backend works.
> The frontend works.
> The docs exist.
>
> But the product is still broken —
> because they no longer agree.
>
> [pause 1s]
>
> This is APIDrift."

---

### [0:12–0:22] SCAN TRIGGER

> "APIDrift uses IBM Bob as a repo-wide contract detective.
> Let's scan."

*[Click "Scan for API Drift" → brief "Bob is analyzing..." state]*

---

### [0:22–0:35] CONTRACT MAP

> "Bob reads three sources at once —
> the frontend API client, the backend route handler,
> and the OpenAPI documentation.
>
> Already, three different answers."

---

### [0:35–1:05] DRIFT MATRIX — THE MONEY SHOT
*[Pan slowly across the matrix; hold on each row]*

> "The drift matrix.
>
> [PAUSE 3s — judge reads]
>
> The total field: frontend expects dollars,
> backend returns integer cents.
> Breaking.
>
> The status enum: frontend expects lowercase,
> backend returns uppercase.
> Breaking.
>
> Three mismatches. All breaking.
> All caused by one backend change that didn't propagate."

---

### [1:05–1:25] BOB EVIDENCE TRAIL

> "Here's IBM Bob's evidence trail.
>
> Bob traced the frontend client, UI component,
> backend route, and OpenAPI spec —
> and concluded the backend change was intentional.
>
> Integer cents is the right call for currency precision.
> The frontend and docs just didn't know yet."

---

### [1:25–1:38] SEVERITY + BUSINESS IMPACT

> "Severity: High.
>
> This drift hits the checkout confirmation flow.
> Users see the wrong total and an unknown payment status.
> In production, this is a revenue-critical bug."

---

### [1:38–1:50] FIX STRATEGY

> "Bob recommends syncing the frontend and OpenAPI
> to match the backend's new canonical contract.
> Because the backend was right.
> The other layers just hadn't caught up."

---

### [1:50–2:15] PATCH + CONTRACT TEST

> "Bob generates the patch —
> the formatter updated to use totalCents,
> the status mapping updated to uppercase,
> the OpenAPI spec updated to match.
>
> [brief pause — judge reads code]
>
> And a contract regression test —
> so this class of drift can never ship silently again."

---

### [2:15–2:25] TICKET ROUTING

> "APIDrift routes the fix to the right team.
> High-priority task created.
> Frontend owner and backend owner both notified.
> Bob's drift report attached."

---

### [2:25–2:45] FIXED CHECKOUT + PR + CLOSE

*[Show fixed checkout: $84.70, Paid in green]*

> "Same checkout. Fixed.
>
> [1s pause]
>
> And the PR summary:
> what drifted, what changed, rollback risk — ready to merge.
>
> [1s pause]
>
> APIDrift.
> Bob catches API drift before your users do."

---

## Problem + Solution Statement (≤500 words — PASTE READY)

```
APIDRIFT: Catch API Contract Drift Before Your Users Do

PROBLEM

APIs break even when the backend technically works.

Fast-moving teams constantly change API response shapes — fields get
renamed, enums change casing, currency representations shift from dollars
to cents. When one layer changes but the others don't, the system silently
disagrees with itself. The backend is correct. The frontend is correct.
But the product is broken.

This is contract drift: the frontend expects one response shape, the
backend returns another, and the API docs still promise something else.

In our demo, a backend developer correctly changed the checkout API to
return integer cents — a standard best practice for currency precision.
But the frontend still read order.total (which no longer existed), and
the OpenAPI spec still documented the old shape. The result: the checkout
page showed "$NaN" for the total and "Unknown" for the payment status.
This is a revenue-critical bug. No syntax error caused it. No failing
test caught it. The system just stopped agreeing with itself.

This type of bug is notoriously hard to find manually. It spans multiple
files and system layers. Code review catches syntax errors, not semantic
contract mismatches. Monitoring fires after users are already affected.

SOLUTION

APIDrift uses IBM Bob as a repo-wide contract detective.

Given a codebase with drift, APIDrift asks Bob to compare the frontend
API client, backend route handler, and OpenAPI documentation simultaneously.
Bob traces field names, types, enum values, and semantic meaning across
all three layers — identifies where they disagree, classifies the severity
of each mismatch, reasons about which layer is the source of truth, and
generates everything needed to fix the problem.

APIDrift produces five artifacts in one workflow:

1. A drift matrix with severity levels (Breaking / Medium / Cosmetic)
2. A business impact summary — which user flows are affected and how
3. A code patch and OpenAPI update from Bob
4. A contract regression test that prevents the same drift from shipping
5. A PR summary and owner routing — the fix assigned to the right team

In our demo, Bob identified three breaking mismatches — field name drift,
semantic unit drift, and enum casing drift — across a real checkout
codebase. Bob classified all three as Breaking severity, described the
business impact on the checkout confirmation flow, patched the frontend
and spec, generated a regression test, and routed the fix to the API
platform team. The checkout total went from $NaN to $84.70.

APIDrift turns IBM Bob into a sync agent for API contracts — keeping
frontend expectations, backend behavior, and API documentation aligned
automatically, before users ever see the mismatch.
```
**Word count: ~380**

---

## IBM Bob Usage Statement (PASTE READY)

```
IBM BOB USAGE IN APIDRIFT

IBM Bob IDE is the core analytical and generative engine of APIDrift.
All Bob usage was performed using the hackathon-provisioned IBM Bob
account (ibm-coding-challenge-xxx). Task session reports with
consumption summaries are in the bob_sessions/ folder.

TASK 1: Contract Drift Analysis
Bob was given @ file references to four files simultaneously:
the frontend API client, checkout UI component, backend route handler,
and OpenAPI specification. Using Bob's repo-wide context understanding,
Bob compared field names, types, enum values, and semantic meaning across
all four files. Bob identified three breaking mismatches, classified each
by severity (Breaking / Medium / Cosmetic), described the business impact
on the checkout confirmation flow, and identified the backend as the
canonical source of truth.

TASK 2: Patch Generation
Bob generated the frontend code patch (updating the checkout formatter
to use totalCents and uppercase status enum) and the OpenAPI specification
update (replacing total with totalCents, updating status enum values to
uppercase). Bob explained the engineering rationale: integer cents avoids
floating-point precision issues in currency calculations.

TASK 3: Contract Test Generation
Bob generated a Jest + Supertest regression contract test that validates
the backend response shape, asserts that the deprecated total field no
longer exists, and verifies the uppercase status enum value.

TASK 4: PR Summary Generation
Bob generated a complete PR description including drift summary, user
impact, files changed, tests added, engineering rationale, and rollback
risk assessment.

WHY IBM BOB, NOT JUST A DIFF TOOL:
Contract drift is a semantic reasoning problem, not a string comparison
problem. Bob understands that changing status from "paid" to "PAID" breaks
every frontend equality check — not because the strings differ, but because
of what that field means in a checkout confirmation flow. Bob also reasons
about intent: the backend change to integer cents was correct and
intentional, so the frontend should adapt to the backend, not the other
way around. That judgment — which layer is the canonical source of truth
— is what IBM Bob provides.
```

---

## Pitch Scripts

### 30-Second Pitch
> "APIs break even when the backend technically works. The real problem is contract drift: the frontend expects one response shape, the backend returns another, and the docs still promise something else. APIDrift uses IBM Bob as a repo-wide contract detective. Bob compares frontend usage, backend implementation, and OpenAPI docs — classifies drift severity, identifies business impact, generates the patch, updates the docs, creates a contract test, and routes the fix to the right team. Bob catches API drift before your users do."

### 2-Minute Pitch
> "Fast-moving teams constantly change APIs. But when the backend, frontend, and docs move at different speeds, bugs slip through. The backend may be working correctly — but the product is broken because the system no longer agrees with itself.
>
> That's contract drift.
>
> In our demo, the checkout backend correctly changed to integer cents for currency precision. But the frontend still expected decimal dollars, and the API docs were never updated. The checkout page showed $NaN and Unknown payment status. Revenue-critical. Silent.
>
> APIDrift uses IBM Bob to detect and fix this. Bob reads the frontend client, backend route, and OpenAPI spec simultaneously — identifies three breaking mismatches, classifies their severity, describes the business impact, and reasons about which layer is the canonical source of truth.
>
> Then Bob generates the fix: a frontend patch, an updated OpenAPI spec, a regression contract test, and a PR summary. APIDrift routes the fix to the right owner — high priority, frontend and backend teams notified, Bob's drift report attached.
>
> The result: $84.70 and Paid. The API promise is kept.
>
> APIDrift. Bob catches API drift before your users do."

---

## Demo Failure Contingencies

### Scenario 1: APIDrift UI Doesn't Load
- Hard refresh → if broken, switch to mobile device with UI pre-loaded
- All screens render from saved static data — no live Bob needed

### Scenario 2: $NaN Not Rendering
- Test on exact machine + browser before recording
- If browser auto-converts: `const total = order.total !== undefined ? order.total.toFixed(2) : "NaN"` → force the string "$NaN"
- This is the entire emotional hook — it must be ugly

### Scenario 3: Bob Output Looks Wrong
- Use saved fallback files for recording — never live Bob
- If Task 1 is vague on severity, re-run with explicit "Return severity as Breaking / Medium / Cosmetic for each field"

---

## Submission Day Order of Operations

1. Confirm all Bob task sessions exported to `bob_sessions/`
2. Record video (use script above; target 2:45)
3. Upload to YouTube/Vimeo; test in private browser
4. Paste problem + solution statement from this file
5. Paste IBM Bob usage statement from this file
6. Push public repo with `bob_sessions/` folder
7. Submit before 10:00 AM ET May 3
8. Check AI Advisor feedback; revise + resubmit ALL deliverables if flagged
