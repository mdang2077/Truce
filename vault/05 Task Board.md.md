# Task Board — APIDrift Build

**Last Updated:** 2026-05-02 07:17 PT

---

## ✅ Completed (Session 1)

- [x] Broken checkout backend (Express, port 3001) - returns totalCents/PAID
- [x] Broken checkout frontend (Next.js, port 3000) - expects total/paid → $NaN
- [x] OpenAPI contract (stale - documents old contract)
- [x] Drift data JSON (sample-drift-output.json with severity + business impact)
- [x] Next.js configuration files for apps/web
- [x] All dependencies installed (root, API, web)
- [x] **VERIFIED: $NaN displays correctly at localhost:3000/checkout** ✨
- [x] API server running on port 3001
- [x] Web server running on port 3000
- [x] APIDrift UI Next.js configuration started (package.json, next.config.js, tsconfig.json, tailwind.config.js)

---

## 🔄 In Progress (Session 1)

- [-] Build APIDrift UI configuration
  - ✅ package.json created
  - ✅ next.config.js created
  - ✅ tsconfig.json created
  - ✅ tailwind.config.js created
  - ⏳ postcss.config.js (next)
  - ⏳ app/layout.tsx and globals.css (next)
  - ⏳ Install dependencies

---

## 📋 TODO

### High Priority (Day 1)
- [ ] Verify broken checkout displays $NaN and "Unknown" status
- [ ] Setup APIDrift UI Next.js configuration
- [ ] Build APIDrift UI - all 10 screens with static data
  - [ ] Screen 1: BrokenCheckout.tsx
  - [ ] Screen 2: ContractSources.tsx
  - [ ] Screen 3: DriftMatrix.tsx (PRIORITY - the screenshot moment)
  - [ ] Screen 4: BobEvidenceTrail.tsx
  - [ ] Screen 5: SeverityImpact.tsx
  - [ ] Screen 6: FixStrategy.tsx
  - [ ] Screen 7: PatchPanel.tsx
  - [ ] Screen 8: ContractTestPanel.tsx
  - [ ] Screen 9: TicketRouting.tsx
  - [ ] Screen 10: FixedCheckout.tsx + PRSummary.tsx

### Bob IDE Tasks
- [ ] Run Bob IDE Task 1: Analyze contract drift + severity
  - Save as: `drift-scanner/bob-task-1-analysis.md`
  - Export session to `bob_sessions/`
- [ ] Run Bob IDE Task 2: Generate patch
  - Save as: `drift-scanner/bob-task-2-patch.md`
  - Export session to `bob_sessions/`
- [ ] Run Bob IDE Task 3: Generate contract test
  - Save as: `apps/api/src/tests/checkout.contract.test.ts`
  - Export session to `bob_sessions/`
- [ ] Run Bob IDE Task 4: Generate PR summary
  - Save as: `drift-scanner/bob-task-4-pr-summary.md`
  - Export session to `bob_sessions/`

### Integration
- [ ] Wire UI to Bob fallback outputs (replace static strings with saved Bob content)

### Polish (Day 2)
- [ ] Polish DriftMatrix - severity badges, row tinting
- [ ] Polish SeverityImpact - bold 🔴 HIGH badge
- [ ] Add "Powered by IBM Bob" sidebar throughout
- [ ] Add "Bob is analyzing..." scan animation
- [ ] Add before/after state on fixed checkout

### Submission
- [ ] Run Bob Task 5: Bob Skill (stretch goal)
- [ ] Record video demo (2:45 target, script in 06 Demo and Pitch.md)
- [ ] Write problem + solution statement (paste from 06)
- [ ] Write IBM Bob usage statement (paste from 06)
- [ ] Export all Bob task session reports to bob_sessions/
- [ ] Submit on hackathon platform before 10:00 AM ET May 3

---

## 🚨 Blockers / Issues

None currently.

---

## 📝 Notes

- Both API (port 3001) and Web (port 3000) servers are running
- Need to verify the $NaN actually renders before proceeding
- APIDrift UI (port 3002) still needs Next.js setup
- All Bob sessions must be exported continuously - don't wait until the end