# Person 2 Implementation Plan - APIDrift Hackathon

**Role:** Server Management, Testing, and Technical Infrastructure Lead  
**Estimated Time:** 4-5 hours  
**Deadline:** 7:00 AM PT May 3, 2026 (~7.5 hours remaining)

---

## 🎯 OVERVIEW

You are responsible for ensuring all servers run correctly, verifying Bob integration is complete, running tests, and maintaining technical infrastructure. Your work enables Person 1 to capture screenshots and record the demo video.

---

## 📋 TASK BREAKDOWN

### TASK 1: Server Startup & Verification (30 minutes)

**Priority:** CRITICAL - Must complete before Person 1 starts screenshots  
**Dependencies:** None - you start first

#### 1.1 Start Backend API Server

**Terminal 2 Commands:**

```powershell
# Navigate to API directory
cd apidrift/apps/api

# Verify dependencies installed
# If node_modules missing, run: npm install

# Start development server
npm run dev
```

**Expected Output:**

```
Server running on port 3001
```

**Verification:**

```powershell
# Test endpoint with curl or Postman
curl -X POST http://localhost:3001/api/checkout `
  -H "Content-Type: application/json" `
  -d '{"items":[{"id":"1","qty":1}]}'
```

**Expected Response:**

```json
{
  "orderId": "ORD-12345",
  "totalCents": 8470,
  "status": "PAID"
}
```

**Critical Checks:**

- [ ] Server starts without errors
- [ ] Port 3001 is accessible
- [ ] Response contains `totalCents` (not `total`)
- [ ] Response contains `status: "PAID"` (uppercase)

**Troubleshooting:**

```powershell
# If port 3001 is in use
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# If dependencies missing
npm install

# If TypeScript errors
npm run build
```

#### 1.2 Start Demo Frontend Server

**Terminal 3 Commands:**

```powershell
# Navigate to web app directory
cd apidrift/apps/web

# Verify dependencies installed
# If node_modules missing, run: npm install

# Start development server
npm run dev
```

**Expected Output:**

```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully
```

**Verification:**

```powershell
# Open in browser
start http://localhost:3000/checkout
```

**Expected Display:**

- Large red text showing **$NaN**
- Large red text showing **Unknown**
- "Order Confirmation" heading
- "Order ID: ORD-12345" (or similar)

**Critical Checks:**

- [ ] Server starts without errors
- [ ] Port 3000 is accessible
- [ ] Page displays $NaN (this is intentional - shows the problem)
- [ ] Page displays Unknown status (this is intentional)
- [ ] No console errors in browser (F12)

**Troubleshooting:**

```powershell
# If port 3000 is in use
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# If Next.js build errors
rm -rf .next
npm run dev

# If API connection fails
# Verify backend is running on port 3001
```

#### 1.3 Verify APIDrift UI Server

**Terminal 1 Status Check:**

```powershell
# Terminal 1 should already be running from previous session
# Verify it's still active at http://localhost:3002
```

**Verification:**

```powershell
# Open in browser
start http://localhost:3002
```

**Expected Display:**

- APIDrift landing page with "Broken Checkout" screen
- Navigation working between all 10 screens
- Bob sidebar visible on left
- Professional styling with blue/purple theme

**Critical Checks:**

- [ ] Server running on port 3002
- [ ] All 10 screens accessible via navigation
- [ ] No console errors in browser
- [ ] Bob sidebar displays correctly
- [ ] PatchPanel shows real code diffs (not "Coming soon...")
- [ ] ContractTestPanel shows real test code
- [ ] PRSummary shows real PR description

**Troubleshooting:**

```powershell
# If server stopped
cd apidrift/apidrift-ui
npm run dev

# If port 3002 is in use
netstat -ano | findstr :3002
taskkill /PID <PID> /F

# If UI shows placeholder text instead of real Bob data
# Check that Bob output files exist:
# - apidrift/drift-scanner/bob-task-1-analysis.md
# - apidrift/drift-scanner/bob-task-2-patch.md
# - apidrift/drift-scanner/bob-task-4-pr-summary.md
# - apidrift/apps/api/src/tests/checkout.contract.test.ts
```

#### 1.4 Communication Checkpoint

**Notify Person 1:**

```
✅ All 3 servers running and verified:
- Backend API: http://localhost:3001 ✓
- Demo Frontend: http://localhost:3000 ✓ (showing $NaN as expected)
- APIDrift UI: http://localhost:3002 ✓

Ready for screenshot capture.
```

---

### TASK 2: Bob Integration Verification (45 minutes)

**Priority:** HIGH - Ensures UI shows real Bob data  
**Dependencies:** Task 1 complete

#### 2.1 Verify Bob Output Files Exist

**File Checklist:**

```powershell
# Navigate to project root
cd c:/Users/xiate/Documents/CS/ibm-hackathon-w-Xiate

# Check Bob analysis file
ls apidrift/drift-scanner/bob-task-1-analysis.md
# Expected: 263 lines of drift analysis

# Check Bob patch file
ls apidrift/drift-scanner/bob-task-2-patch.md
# Expected: 360 lines with code diffs

# Check Bob test file
ls apidrift/apps/api/src/tests/checkout.contract.test.ts
# Expected: 59 lines of Jest test code

# Check Bob PR summary file
ls apidrift/drift-scanner/bob-task-4-pr-summary.md
# Expected: 229 lines of PR description
```

**Critical Checks:**

- [ ] All 4 Bob output files exist
- [ ] Files contain real content (not empty or placeholder)
- [ ] File sizes are reasonable (>1KB each)

**If Files Missing:**

```powershell
# Files should already exist from previous Bob sessions
# If missing, check bob_sessions/ directory for exports
# Contact Person 1 if files are genuinely missing
```

#### 2.2 Verify UI Components Show Real Bob Data

**Component:** PatchPanel.tsx  
**Location:** `apidrift/apidrift-ui/app/components/PatchPanel.tsx`

**Verification Steps:**

1. Open http://localhost:3002
2. Navigate to Screen 7 (Patch Diff)
3. Verify display shows:
   - Real code diffs from `bob-task-2-patch.md`
   - Before/after comparisons
   - Syntax highlighting
   - NOT placeholder text like "Coming soon..."

**Expected Content:**

```typescript
// Should show actual TypeScript code like:
export interface CheckoutResponse {
  orderId: string;
  totalCents: number; // ← Changed from 'total'
  status: string;
}
```

**Component:** ContractTestPanel.tsx  
**Location:** `apidrift/apidrift-ui/app/components/ContractTestPanel.tsx`

**Verification Steps:**

1. Navigate to Screen 8 (Contract Test)
2. Verify display shows:
   - Real test code from `checkout.contract.test.ts`
   - Jest test cases
   - Assertions for totalCents and status
   - NOT placeholder text

**Expected Content:**

```typescript
// Should show actual test code like:
it("should return totalCents as integer (not total as float)", async () => {
  const response = await request(app)
    .post("/api/checkout")
    .send({ items: [{ id: "1", qty: 1 }] })
    .expect(200);

  expect(response.body).toHaveProperty("totalCents");
  expect(response.body).not.toHaveProperty("total");
});
```

**Component:** PRSummary.tsx  
**Location:** `apidrift/apidrift-ui/app/components/PRSummary.tsx`

**Verification Steps:**

1. Navigate to Screen 10 (PR Summary)
2. Verify display shows:
   - Real PR description from `bob-task-4-pr-summary.md`
   - Executive summary
   - Files changed
   - Rollback plan
   - NOT placeholder text

**Expected Content:**

```markdown
# Fix: Align Frontend to Backend Contract (totalCents)

## Summary

Backend evolved from float dollars to integer cents, but frontend wasn't updated.
This PR aligns all layers to use totalCents (integer) as canonical.

## User Impact

- Fixes $NaN display on checkout confirmation
- Fixes "Unknown" status display
```

**Critical Checks:**

- [ ] PatchPanel shows real code diffs
- [ ] ContractTestPanel shows real test code
- [ ] PRSummary shows real PR description
- [ ] All syntax highlighting works correctly
- [ ] No "Coming soon" or placeholder text visible

**If Placeholder Text Still Visible:**

```powershell
# Check component implementation
# Components should read from Bob output files
# May need to restart UI server to pick up changes

cd apidrift/apidrift-ui
# Stop server (Ctrl+C)
npm run dev
```

#### 2.3 Verify Bob Evidence Trail

**Component:** BobEvidenceTrail.tsx  
**Location:** `apidrift/apidrift-ui/app/components/BobEvidenceTrail.tsx`

**Verification Steps:**

1. Navigate to Screen 4 (Bob Evidence Trail)
2. Verify display shows 7 steps of Bob's analysis
3. Check that evidence points reference real findings

**Expected Content:**

- Step 1: "Scanned 4 files across 3 layers"
- Step 2: "Detected field name mismatch: total vs totalCents"
- Step 3: "Detected type mismatch: float vs integer"
- Step 4: "Detected casing mismatch: paid vs PAID"
- Step 5: "Classified severity as HIGH (Breaking)"
- Step 6: "Identified backend as canonical source"
- Step 7: "Generated fix strategy with 3 file patches"

**Critical Checks:**

- [ ] All 7 steps display correctly
- [ ] Evidence points match actual drift findings
- [ ] No generic placeholder text

---

### TASK 3: Run Contract Tests (30 minutes)

**Priority:** MEDIUM - Validates Bob-generated tests work  
**Dependencies:** Task 1 complete

#### 3.1 Install Test Dependencies

**Commands:**

```powershell
# Navigate to API directory
cd apidrift/apps/api

# Verify test dependencies installed
# Should already be in package.json:
# - jest
# - ts-jest
# - supertest
# - @types/jest
# - @types/supertest

# If missing, install
npm install --save-dev jest ts-jest supertest @types/jest @types/supertest
```

#### 3.2 Run Contract Tests

**Commands:**

```powershell
# From apidrift/apps/api directory
npm test

# Or run specific test file
npm test checkout.contract.test.ts
```

**Expected Output:**

```
PASS  src/tests/checkout.contract.test.ts
  POST /api/checkout - Contract Test
    ✓ should return totalCents as integer (not total as float) (45ms)
    ✓ should return status in uppercase (e.g., "PAID" not "paid") (12ms)
    ✓ should return all required fields with correct types (15ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.456s
```

**Critical Checks:**

- [ ] All 3 tests pass
- [ ] No test failures or errors
- [ ] Tests validate totalCents exists
- [ ] Tests validate total does NOT exist
- [ ] Tests validate uppercase status

**If Tests Fail:**

```powershell
# Check backend is running correctly
curl -X POST http://localhost:3001/api/checkout `
  -H "Content-Type: application/json" `
  -d '{"items":[{"id":"1","qty":1}]}'

# Verify response matches expected contract
# Should have: totalCents (not total), status: "PAID" (uppercase)

# If backend response is wrong, check:
# apidrift/apps/api/src/routes/checkout.ts
```

#### 3.3 Document Test Results

**Create file:** `apidrift/TEST_RESULTS.md`

```markdown
# APIDrift Test Results

**Date:** 2026-05-03  
**Tester:** Person 2  
**Environment:** Local development

## Contract Tests

**File:** `apps/api/src/tests/checkout.contract.test.ts`  
**Framework:** Jest + Supertest  
**Generated By:** IBM Bob (Task 3)

### Test Results

✅ **Test 1:** should return totalCents as integer (not total as float)

- Status: PASSED
- Duration: 45ms
- Validates: Backend returns integer cents, not float dollars

✅ **Test 2:** should return status in uppercase (e.g., "PAID" not "paid")

- Status: PASSED
- Duration: 12ms
- Validates: Backend returns uppercase status enum

✅ **Test 3:** should return all required fields with correct types

- Status: PASSED
- Duration: 15ms
- Validates: Complete contract compliance

### Summary

- **Total Tests:** 3
- **Passed:** 3
- **Failed:** 0
- **Duration:** 2.456s

### Conclusion

All Bob-generated contract tests pass successfully. The backend API correctly implements the new contract with:

- `totalCents` as integer (not `total` as float)
- `status` in uppercase (e.g., "PAID")
- All required fields with correct types

These tests will prevent future API drift by catching contract violations in CI/CD.
```

---

### TASK 4: Server Monitoring & Stability (Ongoing)

**Priority:** CRITICAL - Maintain uptime during Person 1's work  
**Duration:** Throughout Person 1's screenshot and video recording

#### 4.1 Monitor Server Health

**Monitoring Checklist (Every 15 minutes):**

```powershell
# Check all 3 servers are still running

# Terminal 1: APIDrift UI (port 3002)
# Should show: "compiled successfully"

# Terminal 2: Backend API (port 3001)
# Should show: "Server running on port 3001"

# Terminal 3: Demo Frontend (port 3000)
# Should show: "ready started server"
```

**Health Check Commands:**

```powershell
# Quick health check script
# Backend API
curl http://localhost:3001/api/checkout -X POST -H "Content-Type: application/json" -d '{"items":[{"id":"1","qty":1}]}'

# Demo Frontend
curl http://localhost:3000/checkout

# APIDrift UI
curl http://localhost:3002
```

**Critical Monitoring Points:**

- [ ] No server crashes or restarts
- [ ] No memory leaks (watch Task Manager)
- [ ] No port conflicts
- [ ] No console errors accumulating

#### 4.2 Restart Procedures (If Needed)

**If Backend API Crashes:**

```powershell
# Terminal 2
cd apidrift/apps/api
npm run dev

# Notify Person 1 immediately
# Wait for "Server running on port 3001" before confirming
```

**If Demo Frontend Crashes:**

```powershell
# Terminal 3
cd apidrift/apps/web
npm run dev

# Notify Person 1 immediately
# Wait for "ready started server" before confirming
```

**If APIDrift UI Crashes:**

```powershell
# Terminal 1
cd apidrift/apidrift-ui
npm run dev

# Notify Person 1 immediately
# Wait for "compiled successfully" before confirming
```

#### 4.3 Communication Protocol

**Immediate Notification Required:**

- Any server crash or restart
- Any error messages in console
- Any performance degradation
- Any port conflicts

**Status Updates (Every 30 minutes):**

```
Status Update:
✅ Backend API: Running stable
✅ Demo Frontend: Running stable
✅ APIDrift UI: Running stable
No issues detected.
```

---

### TASK 5: Final Pre-Submission Verification (30 minutes)

**Priority:** CRITICAL - Last quality check before submission  
**Dependencies:** Person 1 completes screenshots and video

#### 5.1 Code Quality Check

**Run Linting (if configured):**

```powershell
# Check each workspace
cd apidrift/apps/api
npm run lint  # If script exists

cd apidrift/apps/web
npm run lint  # If script exists

cd apidrift/apidrift-ui
npm run lint  # If script exists
```

**Manual Code Review:**

- [ ] No console.log statements in production code
- [ ] No commented-out code blocks
- [ ] No TODO comments without context
- [ ] No hardcoded credentials or secrets

#### 5.2 File Structure Verification

**Required Files Checklist:**

```powershell
# Bob outputs
ls apidrift/drift-scanner/bob-task-1-analysis.md
ls apidrift/drift-scanner/bob-task-2-patch.md
ls apidrift/drift-scanner/bob-task-4-pr-summary.md
ls apidrift/apps/api/src/tests/checkout.contract.test.ts

# Bob sessions
ls bob_sessions/bob_task_may-1-2026_11-42-49-pm.md
ls bob_sessions/bob_task_may-1-2026_11-58-47-pm.md
ls bob_sessions/bob_task_may-2-2026_12-30-29-am.md
ls bob_sessions/bob_task_may-2-2026_11-26-50-pm.md

# Screenshots (Person 1 creates)
ls apidrift/screenshots/screen-01-broken-checkout.png
ls apidrift/screenshots/screen-02-contract-sources.png
ls apidrift/screenshots/screen-03-drift-matrix.png
ls apidrift/screenshots/screen-04-bob-evidence.png
ls apidrift/screenshots/screen-05-severity-impact.png
ls apidrift/screenshots/screen-06-fix-strategy.png
ls apidrift/screenshots/screen-07-patch-panel.png
ls apidrift/screenshots/screen-08-contract-test.png
ls apidrift/screenshots/screen-09-ticket-routing.png
ls apidrift/screenshots/screen-10-pr-summary.png

# Video (Person 1 creates)
ls apidrift/demo-video.mp4

# Submission deliverables (Person 1 creates)
ls submission/problem-statement.md
ls submission/solution-statement.md
ls submission/bob-utilization-statement.md
```

**Critical Checks:**

- [ ] All Bob output files exist and have content
- [ ] All Bob session exports exist
- [ ] All 10 screenshots exist (Person 1 responsibility)
- [ ] Video file exists (Person 1 responsibility)
- [ ] All 3 submission documents exist (Person 1 responsibility)

#### 5.3 README Update

**File:** `apidrift/README.md`

**Add Final Setup Instructions:**

````markdown
## Quick Start

### Prerequisites

- Node.js 18+ installed
- npm installed
- 3 available ports: 3000, 3001, 3002

### Installation

```bash
# Install all dependencies
cd apidrift
npm install

cd apps/api
npm install

cd ../web
npm install

cd ../../apidrift-ui
npm install
```
````

### Running the Demo

**Option 1: Run all servers simultaneously**

```bash
cd apidrift
npm run dev:all
```

**Option 2: Run servers individually**

```bash
# Terminal 1: APIDrift UI
cd apidrift/apidrift-ui
npm run dev

# Terminal 2: Backend API
cd apidrift/apps/api
npm run dev

# Terminal 3: Demo Frontend
cd apidrift/apps/web
npm run dev
```

### Verify Installation

1. **Broken Checkout:** http://localhost:3000/checkout
   - Should display $NaN and Unknown (this demonstrates the problem)

2. **Backend API:** http://localhost:3001/api/checkout
   - POST request should return `{ orderId, totalCents: 8470, status: "PAID" }`

3. **APIDrift UI:** http://localhost:3002
   - Should display 10-screen workflow showing Bob's analysis and fix

### Running Tests

```bash
cd apidrift/apps/api
npm test
```

Expected: 3 contract tests pass (validates Bob-generated test suite)

## Project Structure

```
apidrift/
├── apps/
│   ├── api/              # Backend API (port 3001)
│   │   ├── src/
│   │   │   ├── routes/checkout.ts
│   │   │   └── tests/checkout.contract.test.ts  # Bob-generated
│   │   └── package.json
│   └── web/              # Demo Frontend (port 3000)
│       ├── src/
│       │   ├── api/checkoutClient.ts
│       │   └── components/CheckoutSummary.tsx
│       └── package.json
├── apidrift-ui/          # APIDrift Product UI (port 3002)
│   ├── app/
│   │   ├── components/   # 10 workflow screens
│   │   └── page.tsx
│   └── package.json
├── contracts/
│   └── openapi.yaml      # API specification
├── drift-scanner/
│   ├── bob-task-1-analysis.md    # Bob-generated analysis
│   ├── bob-task-2-patch.md       # Bob-generated patches
│   └── bob-task-4-pr-summary.md  # Bob-generated PR summary
├── bob_sessions/         # IBM Bob session exports
├── screenshots/          # UI screenshots for demo
└── submission/           # Hackathon deliverables
```

## IBM Bob Integration

This project uses IBM Bob for:

1. **Contract Drift Analysis** - Multi-file semantic analysis
2. **Code Patch Generation** - Automated fix creation
3. **Test Generation** - Contract regression tests
4. **PR Documentation** - Comprehensive PR summaries

All Bob outputs are in `drift-scanner/` and `bob_sessions/` directories.

## Submission

**Hackathon:** IBM Spring 2026  
**Theme:** Turn idea into impact faster  
**Deadline:** May 3, 2026 10:00 AM ET

See `submission/` directory for all deliverables.

````

#### 5.4 Git Preparation

**Pre-Commit Checklist:**
```powershell
# Check git status
git status

# Verify no sensitive files
git status | findstr ".env"
git status | findstr "node_modules"
git status | findstr ".next"

# Stage all changes
git add .

# Review what will be committed
git status
````

**Files to Exclude (verify .gitignore):**

```
node_modules/
.next/
.env
.env.local
*.log
.DS_Store
```

**Critical Checks:**

- [ ] No node_modules directories staged
- [ ] No .env files staged
- [ ] No build artifacts staged (.next/)
- [ ] All Bob outputs staged
- [ ] All screenshots staged (Person 1)
- [ ] All submission documents staged (Person 1)

---

## 🔧 SHARED CONSTANTS & CONFIGURATION

### Server Configuration

```typescript
// Port assignments (DO NOT CHANGE)
const BACKEND_PORT = 3001;
const FRONTEND_PORT = 3000;
const UI_PORT = 3002;

// Server URLs
const BACKEND_URL = "http://localhost:3001";
const FRONTEND_URL = "http://localhost:3000";
const UI_URL = "http://localhost:3002";

// API Endpoints
const CHECKOUT_ENDPOINT = "/api/checkout";
const CHECKOUT_PAGE = "/checkout";
```

### File Paths (Reference Only)

```typescript
// Bob outputs (DO NOT MODIFY)
const BOB_ANALYSIS = "apidrift/drift-scanner/bob-task-1-analysis.md";
const BOB_PATCH = "apidrift/drift-scanner/bob-task-2-patch.md";
const BOB_TEST = "apidrift/apps/api/src/tests/checkout.contract.test.ts";
const BOB_PR = "apidrift/drift-scanner/bob-task-4-pr-summary.md";

// Bob sessions (DO NOT MODIFY)
const BOB_SESSIONS_DIR = "bob_sessions/";

// Screenshots (Person 1 creates)
const SCREENSHOTS_DIR = "apidrift/screenshots/";

// Submission (Person 1 creates)
const SUBMISSION_DIR = "submission/";
```

### Expected API Contract

```typescript
// Backend response (canonical)
interface CheckoutResponse {
  orderId: string; // e.g., "ORD-12345"
  totalCents: number; // e.g., 8470 (integer cents)
  status: string; // e.g., "PAID" (uppercase)
}

// Frontend expectation (DRIFTED - intentional for demo)
interface OldCheckoutResponse {
  orderId: string;
  total: number; // WRONG: expects float dollars
  status: string; // WRONG: expects lowercase
}
```

### Test Expectations

```typescript
// Contract test assertions
const EXPECTED_FIELDS = ["orderId", "totalCents", "status"];
const FORBIDDEN_FIELDS = ["total"]; // Old contract field
const VALID_STATUSES = ["PENDING", "PAID", "FAILED"]; // Uppercase
```

---

## 🚨 CRITICAL SUCCESS FACTORS

### Must-Haves (Non-Negotiable)

1. **All 3 servers running stable** - No crashes during Person 1's work
2. **Real Bob data in UI** - No placeholder text visible
3. **Tests passing** - All 3 contract tests must pass
4. **Clean git state** - No secrets, no node_modules

### Communication with Person 1

- **Immediate:** Server crashes or errors
- **Every 30 minutes:** Status updates
- **Before video recording:** Confirm all servers stable
- **Before submission:** Final verification complete

### Fallback Plans

- **If server crashes:** Restart immediately, notify Person 1
- **If tests fail:** Debug backend response, verify contract
- **If Bob data missing:** Check file paths, verify integration
- **If git issues:** Resolve conflicts, verify .gitignore

### Time Management

- **Server startup:** 30 minutes maximum
- **Bob verification:** 45 minutes maximum
- **Testing:** 30 minutes maximum
- **Monitoring:** Ongoing throughout
- **Final verification:** 30 minutes maximum
- **Buffer time:** 1 hour for issues

---

## 📞 INTEGRATION POINTS WITH PERSON 1

### What Person 1 Depends on You

1. **Server Stability:** All 3 servers must run without interruption
2. **Bob Integration:** UI must show real Bob data (not placeholders)
3. **Technical Support:** Quick response to any issues during recording

### What You Depend on Person 1

1. **Screenshot Feedback:** Reports of any UI issues discovered
2. **Video Requirements:** Specific needs for demo recording
3. **Submission Coordination:** Final verification before push

### Shared Responsibilities

1. **Git Management:** Coordinate commits to avoid conflicts
2. **Quality Assurance:** Both verify final product
3. **Time Management:** Both track progress against deadline

---

## 🎯 SUCCESS METRICS

### Completion Criteria

- [ ] All 3 servers running stable for 4+ hours
- [ ] Bob integration verified (real data in UI)
- [ ] All contract tests passing
- [ ] README updated with setup instructions
- [ ] Git repository ready for submission
- [ ] Successful coordination with Person 1

### Quality Standards

- **Servers:** 100% uptime during critical work periods
- **Tests:** 100% pass rate (3/3 tests)
- **Integration:** Zero placeholder text in UI
- **Documentation:** Complete and accurate

### Performance Metrics

- **Server response time:** <100ms for all endpoints
- **Test execution time:** <5 seconds total
- **Build time:** <30 seconds for each app
- **Memory usage:** Stable (no leaks)

---

## 🔍 TROUBLESHOOTING GUIDE

### Issue: Server won't start

**Symptoms:** Error on `npm run dev`  
**Solutions:**

1. Check port availability: `netstat -ano | findstr :PORT`
2. Kill conflicting process: `taskkill /PID <PID> /F`
3. Reinstall dependencies: `rm -rf node_modules; npm install`
4. Clear build cache: `rm -rf .next` (for Next.js apps)

### Issue: Tests failing

**Symptoms:** Contract tests fail with assertion errors  
**Solutions:**

1. Verify backend response: `curl -X POST http://localhost:3001/api/checkout ...`
2. Check backend code: `apidrift/apps/api/src/routes/checkout.ts`
3. Verify test expectations match backend contract
4. Restart backend server

### Issue: UI shows placeholder text

**Symptoms:** "Coming soon..." instead of real Bob data  
**Solutions:**

1. Verify Bob output files exist and have content
2. Check component file paths in PatchPanel, ContractTestPanel, PRSummary
3. Restart UI server to pick up file changes
4. Check browser console for file loading errors

### Issue: $NaN not displaying

**Symptoms:** Frontend shows actual values instead of $NaN  
**Solutions:**

1. This means frontend was accidentally fixed - should show $NaN
2. Verify `checkoutClient.ts` still expects old contract (total, not totalCents)
3. Verify `CheckoutSummary.tsx` still uses old field names
4. This is intentional drift for demo - don't fix it!

### Issue: Git conflicts

**Symptoms:** Merge conflicts when committing  
**Solutions:**

1. Coordinate with Person 1 on who commits what
2. Pull latest changes: `git pull`
3. Resolve conflicts manually
4. Test after resolving to ensure nothing broke

---

## 📚 REFERENCE DOCUMENTATION

### Key Files to Know

- **Backend Route:** `apidrift/apps/api/src/routes/checkout.ts`
- **Frontend Client:** `apidrift/apps/web/src/api/checkoutClient.ts`
- **Frontend Component:** `apidrift/apps/web/src/components/CheckoutSummary.tsx`
- **OpenAPI Spec:** `apidrift/contracts/openapi.yaml`
- **Contract Test:** `apidrift/apps/api/src/tests/checkout.contract.test.ts`

### Bob Output Files

- **Analysis:** `apidrift/drift-scanner/bob-task-1-analysis.md` (263 lines)
- **Patch:** `apidrift/drift-scanner/bob-task-2-patch.md` (360 lines)
- **PR Summary:** `apidrift/drift-scanner/bob-task-4-pr-summary.md` (229 lines)

### Documentation Files

- **Handoff:** `HANDOFF.md` - Session handoff with next steps
- **Implementation:** `IMPLEMENTATION_ANALYSIS.md` - Detailed analysis
- **Architecture:** `vault/04 Technical Architecture.md` - Bob prompts
- **Demo Script:** `vault/06 Demo and Pitch.md` - Video script

**Your technical excellence enables the entire project's success. Focus on stability and quality.**
