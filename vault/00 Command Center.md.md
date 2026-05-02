# Hackathon Command Center

## Current Project State

Project Name: APIDrift
Subtitle: API Drift Detector & Sync Agent
One-Liner: APIDrift uses IBM Bob to detect when frontend code, backend routes, and API specs silently drift apart — classifies severity, identifies business impact, patches the mismatch, creates a contract test, and routes the fix to the right team.
Tagline: "Bob catches API drift before your users do."
Enterprise Tagline: "Keep frontend, backend, and API contracts in sync automatically."
Target User: Frontend + backend engineers and tech leads at fast-moving product teams
Core Problem: Contract drift — one layer changes, the others don't. The backend is correct, the frontend is correct, but the product is broken because they no longer agree.
Core Solution: IBM Bob compares frontend usage, backend routes, and OpenAPI docs → drift matrix with severity + business impact + patch + contract test + ticket routing + PR summary
Current MVP: Broken checkout demo app + APIDrift UI (10 screens) + 5 Bob IDE tasks
Tech Stack: Next.js + Tailwind (APIDrift UI + demo frontend), Express (demo API), OpenAPI YAML, Jest + Supertest, TypeScript
Current Status: All planning complete — READY TO BUILD (as of 2026-05-01)

**Hackathon Theme:** "Turn idea into impact faster"
**Theme Alignment:** Debugging + docs/tests + repetitive task reduction + faster delivery → specific contract safety use case

---

## ⚠️ PIVOT NOTE
Project pivoted from Incident Detective to APIDrift on 2026-05-01.
All Incident Detective planning preserved in 10 AI Specialist Outputs.md §1–§5.

---

## Submission Checklist

**Deadline: 10:00 AM ET, May 3, 2026**

| Deliverable | Status | Notes |
|---|---|---|
| ☐ Video demo (max 3 min, ≥90s showing solution) | ⬜ TODO | Script in 06 Demo and Pitch.md |
| ☐ Written problem + solution statement (≤500 words) | ⬜ TODO | Paste-ready in 06 |
| ☐ Written IBM Bob usage statement | ⬜ TODO | Paste-ready in 06 |
| ☐ GitHub repo (public) + `/bob_sessions` folder | ⬜ TODO | Create before first Bob task |
| ☐ Bob task session reports | ⬜ TODO | Screenshot + markdown per task → bob_sessions/ |

**Bob Sessions Export:**
1. Create `bob_sessions/` before first Bob task
2. Bob IDE → Views and More Actions → History
3. Per task: click header → screenshot summary + export markdown
4. Upload all to `bob_sessions/`

---

## Top Priorities

1. ~~Confirm IBM Bob requirements~~ ✅ Done
2. ~~Lock project idea~~ ✅ Done — APIDrift
3. ~~Define MVP scope + architecture~~ ✅ Done — 10 screens, 5 Bob tasks
4. ~~Demo + Pitch package~~ ✅ Done — script, statements, Q&A ready
5. **Build broken checkout app** — $NaN must render before anything else
6. **Build APIDrift UI (all 10 screens, static data)** — full story visible
7. **Run Bob IDE Tasks 1–4** — generate real artifacts, save fallbacks

---

## Active Tasks

| Task | Owner | Status | Notes |
|---|---|---|---|
| Confirm IBM Bob requirements | Havyn | ✅ DONE | Bob IDE required; ibm-coding-challenge-xxx |
| Lock project idea | Havyn | ✅ DONE | APIDrift |
| Fill 01 Project Brief | Command Center | ✅ DONE | APIDrift brief |
| Fill 03 MVP Scope | Command Center | ✅ DONE | 10 screens + 5 tasks |
| Fill 04 Technical Architecture | Command Center | ✅ DONE | Stack + components + Bob prompts |
| Fill 06 Demo and Pitch | Command Center | ✅ DONE | Full script + statements |
| Fill 07 Judge Q&A | Command Center | ✅ DONE | 5 Q&A pairs |
| Create `bob_sessions/` folder in repo | Havyn | ⬜ TODO | Before first Bob task |
| Build broken checkout backend (totalCents, PAID) | Havyn | ⬜ TODO | Express; port 3001 |
| Build broken checkout frontend (reads total → $NaN) | Havyn | ⬜ TODO | Next.js; port 3000 |
| Confirm $NaN renders correctly | Havyn | ⬜ TODO | Must look bad — large, red |
| Build fixed checkout version | Havyn | ⬜ TODO | Confirms patch before Bob generates it |
| Create drift data JSON (with severity + businessImpact) | Havyn | ⬜ TODO | See 04 Technical Architecture for schema |
| Build APIDrift UI — all 10 screens (static data) | Havyn | ⬜ TODO | DriftMatrix is priority |
| Run Bob Task 1: Analyze contract drift + severity | Havyn | ⬜ TODO | Save as bob-task-1-analysis.md |
| Run Bob Task 2: Generate patch | Havyn | ⬜ TODO | Save as bob-task-2-patch.md |
| Run Bob Task 3: Generate contract test | Havyn | ⬜ TODO | Save as checkout.contract.test.ts |
| Run Bob Task 4: Generate PR summary | Havyn | ⬜ TODO | Save as bob-task-4-pr-summary.md |
| Wire UI to Bob fallback outputs | Havyn | ⬜ TODO | Replace static strings with saved Bob content |
| Polish APIDrift UI (Day 2) | Havyn | ⬜ TODO | Severity badges, animations, Bob sidebar |
| Run Bob Task 5: Bob Skill (stretch) | Havyn | ⬜ TODO | Only after MVP complete |
| Wire Orchestrate ticket routing (stretch) | Havyn | ⬜ TODO | Only if time; simulate otherwise |
| Record video demo | Havyn | ⬜ TODO | Use script from 06; always use fallback files |
| Write problem + solution statement | Havyn | ⬜ TODO | Paste from 06 |
| Write IBM Bob usage statement | Havyn | ⬜ TODO | Paste from 06 |
| Export all Bob task session reports | Havyn | ⬜ TODO | Screenshots + markdown → bob_sessions/ |
| Submit on hackathon platform | Havyn | ⬜ TODO | Before 10:00 AM ET May 3 |

---

## Decisions Made

| Decision | Reason | Date |
|---|---|---|
| Pivoted to APIDrift | Sharper demo, stronger Bob showcase, more original | 2026-05-01 |
| Subtitle: "API Drift Detector & Sync Agent" | Enterprise framing; broader judge appeal | 2026-05-01 |
| Demo scenario: checkout drift (totalCents + PAID) | Most visual, immediately understandable | 2026-05-01 |
| Severity levels: Breaking / Medium / Cosmetic | Makes drift actionable; feels like a real engineering tool | 2026-05-01 |
| Business impact panel (Screen 5) | Non-engineer judges understand immediately | 2026-05-01 |
| Ticket routing (Screen 9, simulated) | Enterprise workflow demo; Orchestrate optional | 2026-05-01 |
| Fix direction: frontend + docs match backend | totalCents is intentional, best practice | 2026-05-01 |
| Build broken app first | $NaN must exist before UI story makes sense | 2026-05-01 |
| Hardcode drift JSON with severity + businessImpact + ticketRouting | Unblocks all 10 screens without scanner | 2026-05-01 |
| Save all Bob outputs as fallback files | Demo never depends on live Bob latency | 2026-05-01 |
| OpenAPI only (no GraphQL/Protobuf in MVP) | Scope discipline; mention extension in pitch | 2026-05-01 |
| No real-time alerts, no real Jira/Slack/GitHub PR | Out of scope; simulate where needed | 2026-05-01 |
| One monorepo demo only | Multi-repo adds complexity without demo value | 2026-05-01 |
| Bob IDE required; ibm-coding-challenge-xxx only | Per official guide | 2026-05-01 |

---

## Risks / Blockers

| Risk | Impact | Mitigation |
|---|---|---|
| $NaN not visually compelling | High — kills the hook | Make it large and red; test browser doesn't auto-convert |
| Bob Task 1 vague on severity | Medium | Prompt explicitly asks Breaking/Medium/Cosmetic; retry if needed |
| DriftMatrix polish takes too long | Medium | Build with basic Tailwind first; polish Day 2 |
| SeverityImpact card looks generic | Medium | Use "checkout confirmation flow" specifically; red badge; bold text |
| bob_sessions not captured | High — required deliverable | Create folder before first task; export after every session |
| Accidentally using personal Bob account | Medium | Check ibm-coding-challenge-xxx in settings before every session |

---

## Bobcoin Budget

| Phase | Bobcoins |
|---|---|
| Task 1: Drift analysis + severity | ~2 |
| Task 2: Patch generation | ~2 |
| Task 3: Contract test | ~1 |
| Task 4: PR summary | ~1 |
| Task 5: Bob Skill (stretch) | ~2 |
| Retries / buffer | ~10 |
| **Total estimate** | **~8–18 / 40** |

---

## Day-by-Day Build Plan

### Day 1 — Get the full ugly demo working

**Morning (3–4h):**
- [ ] Build broken checkout (backend: totalCents/PAID; frontend: reads total → $NaN)
- [ ] Confirm $NaN renders large and red
- [ ] Build fixed checkout version
- [ ] Create drift data JSON (see 04 Technical Architecture for schema)
- [ ] Build APIDrift UI — all 10 screens, static/hardcoded

**End of Day 1 checkpoint:** Click through all 10 screens. Can be ugly. Must exist.

**Afternoon (3–4h):**
- [ ] Run Bob Tasks 1–4 in Bob IDE; save all outputs as fallback files
- [ ] Screenshot + export every Bob task session → bob_sessions/
- [ ] Wire UI to saved Bob outputs (replace hardcoded strings)

### Day 2 — Make it feel like a product

**Morning (2–3h):**
- [ ] Polish DriftMatrix — severity badges, row colors
- [ ] Polish SeverityImpact — bold red header, specific flow name
- [ ] Add "Powered by IBM Bob" sidebar throughout
- [ ] Add "Bob is analyzing..." animation on scan
- [ ] Add before/after on fixed checkout

**Afternoon (2–3h):**
- [ ] Run Bob Task 5 (Bob Skill) if time
- [ ] Wire Orchestrate ticket routing if time
- [ ] Record video demo (target 2:45; use script in 06)
- [ ] Paste written statements
- [ ] Export final Bob sessions; submit

---

## Coordination Map

| File | Domain | Status |
|---|---|---|
| 01 Project Brief | Idea + problem/solution | ✅ Done |
| 02 Research | Market context | ⬜ TODO |
| 03 MVP Scope | 10 screens + 5 Bob tasks | ✅ Done |
| 04 Technical Architecture | Stack + repo + JSON schema + Bob prompts | ✅ Done |
| 05 Task Board | Execution tracking | ⬜ TODO |
| 06 Demo and Pitch | Script + statements (paste-ready) | ✅ Done |
| 07 Judge Q&A | 5 Q&A pairs | ✅ Done |
| 08 Bugs and QA | Issues + fixes | ⬜ TODO |
| 09 Context Packets | Source of truth | ✅ Active |
| 10 AI Specialist Outputs | Session outputs (Incident Detective history preserved) | ✅ Active |
