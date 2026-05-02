# Context Packets

## Latest Project Context Packet

**Last Updated:** 2026-05-01 — v1.0: Severity + business impact + ticket routing added

Project Name: APIDrift
Subtitle: API Drift Detector & Sync Agent
Current One-Liner: APIDrift uses IBM Bob to detect when frontend code, backend routes, and API specs silently drift apart — then classifies severity, identifies business impact, patches the mismatch, creates a contract test, and routes the fix to the right team.
Tagline: "Bob catches API drift before your users do."
Enterprise Tagline: "Keep frontend, backend, and API contracts in sync automatically."
Target User: Frontend + backend engineers and tech leads at fast-moving product teams
Problem: Contract drift — frontend, backend, and API docs silently disagree, causing product failures even when each layer works correctly
Solution: IBM Bob compares all three layers → drift matrix with severity + business impact + patch + contract test + ticket routing + PR summary
MVP: 10 demo screens + 5 Bob IDE tasks + broken/fixed checkout app
Tech Stack: Next.js + Tailwind (APIDrift UI + demo frontend), Express (demo API), OpenAPI YAML, Jest + Supertest, TypeScript, IBM Bob IDE
APIs / Tools: IBM Bob IDE (required, 5 tasks); ibm-coding-challenge-xxx account
Current Build Status: All planning complete — READY TO BUILD
Hackathon Theme: "Turn idea into impact faster"
Demo Scenario: Checkout drift — totalCents vs total, PAID vs paid → $NaN and "Unknown" → Bob detects → severity classified → patch + test + routing → $84.70 and "Paid"
Key Demo Moment: Screen 3 — Drift matrix with severity badges (Breaking/Medium/Cosmetic)
Pitch Tagline: "Bob catches API drift before your users do."
Next Priority: Build broken checkout app — backend returns totalCents, frontend expects total, UI shows $NaN

Decisions Made:
- Project: APIDrift (pivoted from Incident Detective)
- Subtitle: "API Drift Detector & Sync Agent" (enterprise framing)
- Demo scenario: checkout drift (totalCents + PAID enum) — locked
- Severity levels: Breaking / Medium / Cosmetic on each drift finding
- Business impact: per-scan panel ("this affects the checkout confirmation flow — high risk")
- Ticket routing: simulated UI card (Screen 9); real Orchestrate optional if time allows
- Fix direction: update frontend + OpenAPI to match backend (totalCents is intentional)
- Build broken app FIRST — $NaN must be real
- Hardcode drift data JSON with severity + businessImpact + ticketRouting fields
- Save all Bob outputs as fallback files — demo never depends on live latency
- Bob IDE required; ibm-coding-challenge-xxx account only
- bob_sessions/ folder must exist before first Bob task
- OpenAPI only — no GraphQL/Protobuf in MVP
- No real-time commit alerts, no real Jira/Slack/GitHub PR auto-creation
- One monorepo demo only

Do Not Change:
- Vault structure (00–10 files)
- Demo scenario: checkout drift is locked
- Fix direction: frontend + docs update to match backend
- 10 screen order as defined in 03 MVP Scope.md
- Bob's role must be visible (sidebar) and narrated explicitly in video
- Severity classification must be visible in drift matrix

Open Questions:
- Monorepo vs separate repos for demo app vs APIDrift UI?
- watsonx Orchestrate ticket routing — wire real agent or keep simulated?

---

## Submission Requirements (confirmed)

| Deliverable | Requirement | Status |
|---|---|---|
| Video demo | Max 3 min; ≥90s showing solution; narrate IBM Bob | Script in 06 |
| Problem + solution statement | ≤500 words | Paste-ready in 06 |
| IBM Bob usage statement | 4 tasks described | Paste-ready in 06 |
| GitHub repo + bob_sessions/ | Public; screenshots + markdown per task | ⬜ Create folder |

**Deadline:** 10:00 AM ET, May 3, 2026

---

## 10 Demo Screens (from 03 MVP Scope.md)

1. Broken checkout ($NaN, Unknown) + Scan button
2. Contract sources (3 cards)
3. Drift matrix with severity ← priority component
4. Bob evidence trail
5. Severity + business impact ← new
6. Fix strategy (2 options)
7. Patch diff (frontend + OpenAPI)
8. Contract test
9. Ticket/owner routing ← new
10. Fixed checkout ($84.70, Paid) + PR summary

---

## 5 Bob IDE Tasks

1. Analyze contract drift (includes severity + business impact)
2. Generate patch
3. Generate contract test
4. Generate PR summary
5. Create Bob Skill (stretch)

---

## Paste-Ready Specialist Context

```
You are a specialist helping me build a hackathon project for the
IBM Bob Dev Day 2026 hackathon this weekend.

Project Name: APIDrift
Subtitle: API Drift Detector & Sync Agent
Tagline: "Bob catches API drift before your users do."
Hackathon Theme: "Turn idea into impact faster"
Target User: Frontend/backend engineers at fast-moving product teams
Problem: Contract drift — frontend, backend, and API docs disagree
silently, causing product failures even when each layer is technically correct.
Solution: IBM Bob compares all three layers → drift matrix with severity
+ business impact + patch + contract test + ticket routing + PR summary

Demo scenario (LOCKED):
- Backend changed: total → totalCents, "paid" → "PAID"
- Frontend still expects: total (dollars), status === "paid"
- OpenAPI still says: total: number, status: "paid"
- Result: checkout shows $NaN and "Unknown status"
- Fix: Bob updates frontend + OpenAPI to match backend

10 Demo Screens (locked order):
1. Broken checkout + scan button
2. Contract sources (3 cards)
3. Drift matrix with severity badges (Breaking/Medium/Cosmetic)
4. Bob evidence trail (7-point chain)
5. Severity + business impact panel (HIGH, revenue-critical)
6. Fix strategy (2 options, Option B recommended)
7. Patch diff (frontend + OpenAPI)
8. Contract test
9. Ticket/owner routing (simulated)
10. Fixed checkout ($84.70, Paid) + PR summary

Tech Stack: Next.js + Tailwind, Express, OpenAPI YAML, Jest + Supertest,
TypeScript, IBM Bob IDE (5 tasks)

5 Bob IDE tasks:
1. Analyze drift (severity + business impact)
2. Generate patch
3. Generate contract test
4. Generate PR summary
5. Bob Skill (stretch)

Drift data JSON: saved as sample-drift-output.json with severity,
businessImpact, and ticketRouting fields — unblocks all 10 UI screens

Build order:
1. Broken checkout app ($NaN UI)
2. Fixed checkout version
3. Drift data JSON (hardcoded with severity)
4. APIDrift UI (all 10 screens, static)
5. Bob IDE tasks 1–4
6. Wire UI to Bob fallback outputs
7. Polish Day 2
8. Ticket routing screen (simulated card)

Submission:
- Video max 3 min; ≥90s; must narrate IBM Bob by name
- bob_sessions/ with screenshots + markdown per task
- Deadline: 10:00 AM ET May 3
- Use ibm-coding-challenge-xxx Bob account

Do Not Change:
- Demo scenario (totalCents/PAID drift)
- 10 screen order
- Severity classification must be visible in demo
- Bob's role visible and narrated in video
```

---

## Packet History

### Packet v1.0 — 2026-05-01
- Severity levels added to drift matrix (Breaking / Medium / Cosmetic)
- Business impact panel added (Screen 5)
- Ticket/owner routing added (Screen 9, simulated)
- Demo arc updated: 9 → 10 screens
- Drift data JSON updated: severity + businessImpact + ticketRouting fields
- Product framing: "API Drift Detector & Sync Agent"
- Enterprise tagline added
- Pitch scripts updated to include severity + routing
- Cuts confirmed: OpenAPI only, no real Jira/Slack, no multi-repo, no real-time alerts

### Packet v0.9 — 2026-05-01
- PIVOTED: Incident Detective → APIDrift
- Initial APIDrift planning complete

### Packets v0.1–v0.8 — 2026-05-01 (Incident Detective — archived in history)
