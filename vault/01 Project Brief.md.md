# Project Brief — APIDrift

**Created:** 2026-05-01
**Pivoted from:** Incident Detective
**Status:** Locked ✅

---

## Project Identity

**Project Name:** APIDrift

**One-Liner:**
APIDrift uses IBM Bob to detect mismatches between frontend API usage, backend responses, and API documentation — then generates the patch, contract test, and PR summary.

**Taglines:**
- "Bob catches API drift before your users do." ← primary
- "Your frontend, backend, and docs finally agree."
- "Contract safety for fast-moving teams."
- "Bob keeps your API promises honest."

**Stronger pitch one-liner:**
APIDrift turns IBM Bob into a repo-wide contract detective that finds where your API promise broke, fixes the mismatch, and prevents it from coming back.

---

## The Core Insight

Most bugs are not "the code is completely broken." A lot of real bugs happen because **one part of the system changed and the other parts didn't.**

This is contract drift:

```
Backend now returns:    { "totalCents": 8470, "status": "PAID" }
Frontend still expects: { "total": 84.70,    "status": "paid" }
OpenAPI docs still say: { "total": number,   "status": "paid" }
```

Result: checkout page shows **$NaN** and **Payment status: Unknown**. The backend is technically working. The frontend code has no syntax errors. But the product is broken.

APIDrift makes IBM Bob the "contract detective" — comparing all three layers simultaneously and reasoning about where the promise broke.

---

## Target User

Frontend and backend engineers, tech leads, and engineering managers at fast-moving product teams.

**User Profile:**
- Moves fast; API response shapes change frequently during development
- Doesn't always have strict contract enforcement (no strict OpenAPI validation in CI)
- Has experienced the pain of debugging a bug that "shouldn't exist" — code looks fine, but something disagrees somewhere
- Would benefit from a tool that catches drift before it ships

---

## Problem Statement

Fast-moving teams constantly change APIs. But when the backend, frontend, and docs move at different speeds, bugs slip through. A field gets renamed, an enum changes casing, or a currency value changes from dollars to cents. The backend may be working exactly as written — but the product is broken because the system no longer agrees with itself.

**This is contract drift.** And it's invisible until a user sees it.

Current tools don't solve this:
- TypeScript types help within a layer but don't span frontend/backend/docs
- Code review catches syntax but not semantic contract mismatches across files
- API monitoring (DataDog, PagerDuty) fires after users are already affected

The gap: no tool reads the full repo context — frontend usage, backend implementation, AND API documentation simultaneously — and reasons about where they disagree.

---

## Solution Statement

APIDrift uses IBM Bob as a repo-wide contract detective.

Given a repo with drift:
1. Bob compares frontend API client code, backend route handlers, and OpenAPI documentation
2. Bob produces a **drift matrix** showing exactly which fields disagree and how
3. Bob reasons about which layer should be the source of truth
4. Bob generates: the patch (updated frontend or backend), updated OpenAPI docs, a regression contract test, and a PR summary

**IBM Bob is central — not background.** Bob's repo-wide context understanding is what makes this possible. This isn't a YAML diffing tool — it's semantic reasoning across multiple files and layers simultaneously.

---

## Demo Story

**The specific bug:** A backend developer changed the checkout API response:
- `total: 84.70` → `totalCents: 8470` (safer currency representation)
- `status: "paid"` → `status: "PAID"` (uppercase enum)

Frontend and docs were not updated.

**What the user sees:** Checkout shows `Total: $NaN` and `Payment status: Unknown`.

**What APIDrift does:**
1. Scans frontend client, UI component, backend route, and OpenAPI spec
2. Displays drift matrix — which fields disagree, where, and how
3. Shows Bob's evidence trail — what Bob traced and why it concluded this
4. Recommends fix strategy: update frontend + docs to match the intentional backend change
5. Generates patch (frontend formatter), docs update (OpenAPI YAML), contract test (Jest), and PR summary

**The "wow" moment:** Bob understands this isn't just a missing field — it's a disagreement across product behavior, frontend assumptions, backend implementation, and public API documentation. The drift matrix makes that instantly visible.

---

## Pitch Angles

**30-second version:**
APIs break even when the backend technically works. The real problem is contract drift: the frontend expects one response shape, the backend returns another, and the docs still promise something else. APIDrift uses IBM Bob as a repo-wide contract detective. Bob compares frontend usage, backend implementation, OpenAPI docs, and tests — then identifies the drift, recommends the canonical contract, generates the patch, updates the docs, and adds a contract test so the mismatch never ships again.

**Business value:**
- Prevents integration bugs before they reach users
- Reduces debugging time for cross-layer mismatches (notoriously slow to diagnose)
- Generates PR-ready artifacts — patch + test + docs + summary — from a single Bob analysis
- Scales to any codebase Bob can read

---

## Hackathon Theme Alignment

Theme: "Turn idea into impact faster"

APIDrift combines IBM's listed example use cases:
- **Debugging:** find where the real root cause is (contract layer, not code layer)
- **Docs/tests:** generate contract tests and update OpenAPI automatically
- **Repetitive task reduction:** eliminate manual cross-layer contract checking
- **Faster delivery:** catch drift before it ships instead of after

---

## MVP Scope (5 things — from 03 MVP Scope.md)

1. Show a broken app caused by API drift
2. Compare frontend/backend/OpenAPI contract sources
3. Display Bob's evidence trail
4. Show Bob-generated patch, docs update, and test
5. Show the fixed app and generated PR summary

---

## Tech Stack (from 04 Technical Architecture.md)

| Layer | Technology |
|---|---|
| APIDrift UI | Next.js + Tailwind |
| Demo checkout app | Next.js frontend + Express backend |
| Contract file | OpenAPI YAML |
| Contract tests | Jest + Supertest |
| Drift scanner | TypeScript (reads hardcoded/sample files) |
| Bob outputs | Saved Markdown/JSON fallback files |
| IBM Bob | Bob IDE (required) — 5 tasks |

---

## Open Questions

1. Demo repo bug: confirmed as checkout drift (totalCents + PAID enum) ✅
2. Fix direction: update frontend + docs to match backend ✅
3. Bob task prompts: defined in 04 Technical Architecture.md ✅
4. Stretch: watsonx Orchestrate "Release Contract Assistant" — only if MVP done with time to spare
