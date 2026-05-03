# Truce - Video Demo Script

**Product Name:** Truce  
**Target Length:** 2:45 (under 3 minutes)  
**Format:** Screen recording with optional narration  
**Output:** `apidrift/demo-video.mp4`

---

## 📝 NARRATION SCRIPT (Use "Truce" throughout)

### [0:00-0:12] OPENING - THE BROKEN APP

**Screen:** http://localhost:3000/checkout showing $NaN and "Unknown"

**Narration:**
> "The backend works. The frontend works. The docs exist.
> 
> But the product is still broken — because they no longer agree.
> 
> [pause 1 second]
> 
> This is Truce."

---

### [0:12-0:22] SCAN TRIGGER

**Screen:** Switch to http://localhost:3002

**Narration:**
> "Truce uses IBM Bob as a repo-wide contract detective. Let's scan."

---

### [0:22-0:35] CONTRACT MAP

**Screen:** Screen 2 - Contract Sources (3-column view)

**Narration:**
> "Bob reads three sources at once — the frontend API client, the backend route handler, and the OpenAPI documentation.
> 
> Already, three different answers."

---

### [0:35-1:05] DRIFT MATRIX - THE MONEY SHOT ⭐

**Screen:** Screen 3 - Drift Matrix (MOST IMPORTANT SCREEN)

**Narration:**
> "The drift matrix.
> 
> [PAUSE 3 seconds — let judge read the table]
> 
> The total field: frontend expects dollars, backend returns integer cents. Breaking.
> 
> The status enum: frontend expects lowercase, backend returns uppercase. Breaking.
> 
> Three mismatches. All breaking. All caused by one backend change that didn't propagate."

**Actions:**
- **SLOW PAN** across the drift matrix
- Hold on each row for 2-3 seconds
- Make sure "BREAKING" badges are clearly visible
- This is the HERO SHOT - spend the most time here

---

### [1:05-1:25] BOB EVIDENCE TRAIL

**Screen:** Screen 4 - Bob Evidence Trail

**Narration:**
> "Here's IBM Bob's evidence trail.
> 
> Bob traced the frontend client, UI component, backend route, and OpenAPI spec — and concluded the backend change was intentional.
> 
> Integer cents is the right call for currency precision. The frontend and docs just didn't know yet."

---

### [1:25-1:38] SEVERITY + BUSINESS IMPACT

**Screen:** Screen 5 - Severity Impact

**Narration:**
> "Severity: High.
> 
> This drift hits the checkout confirmation flow. Users see the wrong total and an unknown payment status.
> 
> In production, this is a revenue-critical bug."

---

### [1:38-1:50] FIX STRATEGY

**Screen:** Screen 6 - Fix Strategy

**Narration:**
> "Bob recommends syncing the frontend and OpenAPI to match the backend's new canonical contract.
> 
> Because the backend was right. The other layers just hadn't caught up."

---

### [1:50-2:15] PATCH + CONTRACT TEST

**Screen:** Screen 7 (Patch Panel) → Screen 8 (Contract Test)

**Narration:**
> "Bob generates the patch — the formatter updated to use totalCents, the status mapping updated to uppercase, the OpenAPI spec updated to match.
> 
> [brief pause — let judge read code]
> 
> And a contract regression test — so this class of drift can never ship silently again."

**Actions:**
- Show Screen 7: Code diffs with before/after
- Hold for 3-4 seconds on the code
- Switch to Screen 8: Test code
- Hold for 3-4 seconds on the test

---

### [2:15-2:25] TICKET ROUTING

**Screen:** Screen 9 - Ticket Routing

**Narration:**
> "Truce routes the fix to the right team. High-priority task created. Frontend owner and backend owner both notified. Bob's drift report attached."

---

### [2:25-2:45] FIXED CHECKOUT + PR + CLOSE

**Screen:** Screen 10 (PR Summary) → Back to fixed checkout (if available)

**Narration:**
> "Same checkout. Fixed.
> 
> [1 second pause]
> 
> And the PR summary: what drifted, what changed, rollback risk — ready to merge.
> 
> [1 second pause]
> 
> Truce. Bob catches API drift before your users do."

---

## 🎬 QUICK RECORDING CHECKLIST

### Before Recording
- [ ] All 3 servers running (ports 3000, 3001, 3002)
- [ ] Browser at 100% zoom (Cmd + 0)
- [ ] Close unnecessary tabs and applications
- [ ] Disable notifications (Do Not Disturb)
- [ ] Test recording software

### During Recording
- [ ] Follow the script timing
- [ ] Speak clearly and at a moderate pace
- [ ] Pause on the Drift Matrix screen (hero shot)
- [ ] Show Bob-generated code clearly
- [ ] Keep under 3 minutes

### After Recording
- [ ] Save as `apidrift/demo-video.mp4`
- [ ] Verify video is under 3 minutes
- [ ] Check that all key screens are visible
- [ ] Confirm audio is clear (if narrated)

---

## 🎯 KEY POINTS TO EMPHASIZE

1. **Product Name:** Always say "Truce" (not APIDrift)
2. **IBM Bob:** Emphasize Bob's role throughout
3. **Hero Shot:** Drift Matrix screen (0:35-1:05) - most important
4. **Transformation:** $NaN → $84.70
5. **Complete Solution:** Bob generates patches, tests, and PR summary

---

**Recording Time Estimate:** 50-60 minutes (including setup and retakes)

**Good luck! 🚀**