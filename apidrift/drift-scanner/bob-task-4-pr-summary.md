# Pull Request: Fix API Contract Drift in Checkout Flow

## 🔍 Drift Summary

**Critical API contract drift detected** between backend, frontend, and OpenAPI specification in the checkout flow. Backend evolved to use integer cents (`totalCents`) and uppercase status enums (`"PAID"`), but frontend and documentation still expected the old contract with float dollars (`total`) and lowercase status (`"paid"`).

**Impact:** Users see `$NaN` and `Unknown` status on checkout confirmation page instead of actual payment amount and status.

---

## 👤 User Impact

### Before This Fix

```
Checkout Complete
Order ID: ORD-1042
Total: $NaN          ← Broken
Status: Unknown      ← Broken
```

### After This Fix

```
Checkout Complete
Order ID: ORD-1042
Total: $84.70        ← Fixed
Status: Paid         ← Fixed
```

**Severity:** 🔴 **HIGH** - Payment confirmation page is non-functional, causing user confusion and potential support burden.

---

## 📝 Files Changed

### 1. `apps/web/src/api/checkoutClient.ts`

**Change:** Updated TypeScript interface to match backend contract

- Changed `total: number` → `totalCents: number`
- Updated comments to reflect uppercase status

**Lines Changed:** 2 lines modified

### 2. `apps/web/src/components/CheckoutSummary.tsx`

**Change:** Updated display logic to handle new contract

- Convert `totalCents` (integer) to dollar display: `(order.totalCents / 100).toFixed(2)`
- Handle uppercase status comparison: `order.status.toUpperCase() === 'PAID'`
- Changed error styling from red to green (success state)

**Lines Changed:** 3 lines modified

### 3. `contracts/openapi.yaml`

**Change:** Updated API documentation to match current backend

- Changed `total` (number) → `totalCents` (integer)
- Updated status enum from lowercase to uppercase: `["PENDING", "PAID", "FAILED"]`
- Added `required` fields and validation constraints
- Bumped version from 1.0.0 → 1.0.1

**Lines Changed:** 15 lines modified

---

## ✅ Tests Added

### `apps/api/src/tests/checkout.contract.test.ts`

**New contract regression test** to prevent future drift:

1. **Test 1:** Asserts `totalCents` exists as integer (not `total` as float)
2. **Test 2:** Asserts `status` is uppercase (e.g., "PAID" not "paid")
3. **Test 3:** Validates all required fields with correct types

**Coverage:** 3 test cases, ~30 lines of test code

**Run with:** `cd apps/api && npm test`

---

## 🏗️ Engineering Rationale

### Why `totalCents` is Canonical

1. **Floating-Point Precision**
   - JavaScript: `0.1 + 0.2 !== 0.3` (floating-point error)
   - Integer cents avoid precision bugs in financial calculations

2. **Industry Standard**
   - Stripe API uses integer cents
   - PayPal API uses integer cents
   - Best practice for currency handling

3. **Type Safety**
   - Integer is unambiguous (8470 = $84.70)
   - No confusion about decimal places

### Why Backend is Source of Truth

- Backend is already deployed and processing payments correctly
- Frontend is client-side only - easier to update
- OpenAPI is documentation - zero runtime impact to update
- Changing backend would require re-deployment and rollback risk

---

## ⚠️ Rollback Risk Assessment

**Risk Level:** 🟢 **LOW**

### Why Low Risk

1. **Frontend-Only Changes**
   - No backend modifications
   - No database schema changes
   - No API endpoint changes

2. **Backward Compatible**
   - Backend continues to work exactly as before
   - No breaking changes to backend contract

3. **Isolated Scope**
   - Only affects checkout confirmation page
   - Does not impact payment processing logic
   - Does not affect other API endpoints

4. **Easy Rollback**
   - Revert commits in reverse order
   - No data migration needed
   - No cache invalidation needed

### Rollback Plan

If issues arise:

```bash
# Revert in reverse order
git revert <commit-hash-openapi>    # Documentation only
git revert <commit-hash-component>  # UI only
git revert <commit-hash-client>     # Types only
```

**Estimated Rollback Time:** < 5 minutes

---

## 🧪 Testing Checklist

- [x] TypeScript compilation passes (`npx tsc --noEmit`)
- [x] Contract tests pass (`npm test`)
- [x] Manual testing: Checkout page displays `$84.70` and `Paid`
- [x] OpenAPI validation passes (`npx @redocly/cli lint contracts/openapi.yaml`)
- [ ] Integration test with real API (recommended before merge)
- [ ] Cross-browser testing (Chrome, Firefox, Safari)

---

## 🚀 Deployment Notes

### Pre-Deployment

1. Ensure backend is running and healthy
2. Run full test suite
3. Review OpenAPI changes in Swagger UI

### Deployment

1. Deploy frontend changes (zero downtime)
2. Update OpenAPI documentation
3. Monitor error logs for 15 minutes

### Post-Deployment

1. Verify checkout page in production
2. Check analytics for error rate drop
3. Monitor support tickets for related issues

---

## 📚 Related Documentation

- **Analysis Report:** `drift-scanner/bob-task-1-analysis.md`
- **Patch Details:** `drift-scanner/bob-task-2-patch.md`
- **Contract Test:** `apps/api/src/tests/checkout.contract.test.ts`
- **OpenAPI Spec:** `contracts/openapi.yaml`

---

## 🔮 Future Improvements

1. **Automated Drift Detection**
   - Add CI check to compare OpenAPI spec vs actual API responses
   - Fail build if drift detected

2. **Schema-First Development**
   - Generate TypeScript types from OpenAPI spec
   - Ensure frontend always matches documentation

3. **Runtime Validation**
   - Add Zod or PropTypes to validate API responses at runtime
   - Catch drift before it reaches users

4. **Integration Tests**
   - Add end-to-end test that calls real API
   - Assert response shape matches OpenAPI spec

---

## 👥 Reviewers

**Recommended Reviewers:**

- Frontend team (for UI changes)
- Backend team (to confirm contract understanding)
- QA team (for testing strategy)

**Estimated Review Time:** 15-20 minutes

---

## ✨ Summary

This PR fixes critical API contract drift that caused the checkout confirmation page to display `$NaN` and `Unknown` status. The fix aligns frontend and documentation to the backend's integer cents pattern, which is industry best practice for currency handling. All changes are frontend-only with low rollback risk. Contract tests added to prevent future drift.

**Merge Confidence:** 🟢 **HIGH** - Well-tested, low-risk, high-impact fix.
