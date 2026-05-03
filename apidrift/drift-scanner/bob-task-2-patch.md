# Bob IDE Task 2: Code Patch Generation

**Generated:** 2026-05-03 06:14 UTC  
**Task:** Align frontend and OpenAPI to backend contract  
**Strategy:** Use `totalCents` (integer) as canonical, update all consuming layers

---

## Patch Overview

**Files to Update:**

1. `apps/web/src/api/checkoutClient.ts` - Update TypeScript interface
2. `apps/web/src/components/CheckoutSummary.tsx` - Update display logic
3. `contracts/openapi.yaml` - Update API documentation

**Approach:** Backend is canonical (integer cents = best practice). Frontend adapts to backend.

---

## File 1: apps/web/src/api/checkoutClient.ts

### Before (Drifted)

```typescript
// apps/web/src/api/checkoutClient.ts
// DRIFTED: this interface still expects the OLD contract
// Backend now returns totalCents + PAID — this causes $NaN and "Unknown"

export interface CheckoutResponse {
  orderId: string;
  total: number; // ← OLD: backend no longer returns this
  status: string; // ← OLD: backend now returns "PAID" not "paid"
}

export async function fetchCheckout(): Promise<CheckoutResponse> {
  const res = await fetch("http://localhost:3001/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: [{ id: "1", qty: 1 }] }),
  });
  return res.json();
}
```

### After (Fixed)

```typescript
// apps/web/src/api/checkoutClient.ts
// FIXED: interface now matches backend contract

export interface CheckoutResponse {
  orderId: string;
  totalCents: number; // ← FIXED: backend returns integer cents
  status: string; // ← FIXED: backend returns uppercase (e.g., "PAID")
}

export async function fetchCheckout(): Promise<CheckoutResponse> {
  const res = await fetch("http://localhost:3001/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: [{ id: "1", qty: 1 }] }),
  });
  return res.json();
}
```

### Changes Explained

- **Line 6:** Changed `total: number` → `totalCents: number`
  - **Why:** Backend returns integer cents (8470), not float dollars (84.70)
  - **Impact:** TypeScript now correctly types the response
- **Line 7:** Updated comment to reflect uppercase status
  - **Why:** Backend returns "PAID", "PENDING", etc. (uppercase)
  - **Impact:** Developers understand the actual contract

---

## File 2: apps/web/src/components/CheckoutSummary.tsx

### Before (Drifted)

```typescript
// apps/web/src/components/CheckoutSummary.tsx
// DRIFTED: reads order.total which is undefined → $NaN
// reads order.status === "paid" which never matches "PAID" → "Unknown"

import { CheckoutResponse } from '../api/checkoutClient';

export function formatCheckout(order: CheckoutResponse) {
  // Handle undefined total gracefully to show $NaN
  const totalValue = order.total !== undefined ? order.total.toFixed(2) : 'NaN';

  return {
    id: order.orderId,
    total: `$${totalValue}`,                                    // ← $NaN (total is undefined)
    statusLabel: order.status === 'paid' ? 'Paid' : 'Unknown',  // ← "Unknown" (backend returns "PAID")
  };
}

export default function CheckoutSummary({ order }: { order: CheckoutResponse }) {
  const formatted = formatCheckout(order);
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout Complete</h1>
      <div className="space-y-4">
        <div>
          <span className="text-gray-500">Order ID:</span>
          <span className="ml-2 font-mono">{formatted.id}</span>
        </div>
        <div>
          <span className="text-gray-500">Total:</span>
          {/* Make $NaN large, red, and impossible to miss */}
          <span className="ml-2 text-4xl font-bold text-red-600">{formatted.total}</span>
        </div>
        <div>
          <span className="text-gray-500">Status:</span>
          <span className="ml-2 text-2xl font-bold text-red-600">{formatted.statusLabel}</span>
        </div>
      </div>
    </div>
  );
}
```

### After (Fixed)

```typescript
// apps/web/src/components/CheckoutSummary.tsx
// FIXED: converts totalCents to dollars, handles uppercase status

import { CheckoutResponse } from '../api/checkoutClient';

export function formatCheckout(order: CheckoutResponse) {
  // Convert integer cents to dollar string (8470 → "84.70")
  const totalValue = (order.totalCents / 100).toFixed(2);

  return {
    id: order.orderId,
    total: `$${totalValue}`,                                           // ← $84.70 (correct)
    statusLabel: order.status.toUpperCase() === 'PAID' ? 'Paid' : 'Unknown',  // ← "Paid" (correct)
  };
}

export default function CheckoutSummary({ order }: { order: CheckoutResponse }) {
  const formatted = formatCheckout(order);
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout Complete</h1>
      <div className="space-y-4">
        <div>
          <span className="text-gray-500">Order ID:</span>
          <span className="ml-2 font-mono">{formatted.id}</span>
        </div>
        <div>
          <span className="text-gray-500">Total:</span>
          {/* Now displays correct amount in green */}
          <span className="ml-2 text-4xl font-bold text-green-600">{formatted.total}</span>
        </div>
        <div>
          <span className="text-gray-500">Status:</span>
          <span className="ml-2 text-2xl font-bold text-green-600">{formatted.statusLabel}</span>
        </div>
      </div>
    </div>
  );
}
```

### Changes Explained

- **Line 7:** Changed `order.total !== undefined ? order.total.toFixed(2) : 'NaN'` → `(order.totalCents / 100).toFixed(2)`
  - **Why:** Convert integer cents (8470) to float dollars (84.70) for display
  - **Impact:** Users see `$84.70` instead of `$NaN`
- **Line 11:** Changed `order.status === 'paid'` → `order.status.toUpperCase() === 'PAID'`
  - **Why:** Backend returns uppercase "PAID", need case-insensitive comparison
  - **Impact:** Users see "Paid" instead of "Unknown"
- **Lines 28, 32:** Changed `text-red-600` → `text-green-600`
  - **Why:** Success state should be green, not red
  - **Impact:** Visual feedback matches successful payment

---

## File 3: contracts/openapi.yaml

### Before (Drifted)

```yaml
openapi: 3.0.0
info:
  title: APIDrift Demo API
  version: 1.0.0
  description: >
    STALE CONTRACT — intentionally out of sync with the backend.
    Backend now returns totalCents + uppercase status.
    This file still documents the OLD contract.
    Used by IBM Bob to detect drift.

paths:
  /api/checkout:
    post:
      summary: Process checkout
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                items:
                  type: array
      responses:
        "200":
          description: Checkout complete
          content:
            application/json:
              schema:
                type: object
                properties:
                  orderId:
                    type: string
                    example: "ORD-1042"
                  total:
                    type: number
                    description: Total order amount in dollars (STALE — backend now returns totalCents)
                    example: 84.70
                  status:
                    type: string
                    description: Payment status (STALE — backend now returns uppercase)
                    enum: ["pending", "paid", "failed"]
```

### After (Fixed)

```yaml
openapi: 3.0.0
info:
  title: APIDrift Demo API
  version: 1.0.1
  description: >
    API contract for APIDrift demo application.
    Updated to match current backend implementation.

paths:
  /api/checkout:
    post:
      summary: Process checkout
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                items:
                  type: array
                  items:
                    type: object
                    properties:
                      id:
                        type: string
                      qty:
                        type: integer
      responses:
        "200":
          description: Checkout complete
          content:
            application/json:
              schema:
                type: object
                required:
                  - orderId
                  - totalCents
                  - status
                properties:
                  orderId:
                    type: string
                    description: Unique order identifier
                    example: "ORD-1042"
                  totalCents:
                    type: integer
                    description: Total order amount in cents (integer to avoid floating-point errors)
                    example: 8470
                    minimum: 0
                  status:
                    type: string
                    description: Payment status (uppercase)
                    enum: ["PENDING", "PAID", "FAILED"]
                    example: "PAID"
```

### Changes Explained

- **Line 4:** Changed version `1.0.0` → `1.0.1`
  - **Why:** Semantic versioning - patch update for documentation fix
- **Lines 5-7:** Removed "STALE CONTRACT" warning, updated description
  - **Why:** Contract is now accurate
- **Lines 21-27:** Added detailed request body schema
  - **Why:** Better API documentation for consumers
- **Line 34:** Changed `total` → `totalCents`
  - **Why:** Match backend field name
- **Line 35:** Changed `type: number` → `type: integer`
  - **Why:** Backend returns integer, not float
- **Lines 36-38:** Updated description and example
  - **Why:** Document integer cents pattern (8470 = $84.70)
- **Line 39:** Added `minimum: 0` constraint
  - **Why:** Negative amounts are invalid
- **Lines 40-44:** Changed status enum to uppercase
  - **Why:** Backend returns "PAID", "PENDING", "FAILED" (uppercase)
- **Lines 35-37:** Added `required` array
  - **Why:** All three fields are always present in response

---

## Verification Steps

After applying these patches:

1. **Type Safety Check**

   ```bash
   cd apps/web && npx tsc --noEmit
   ```

   Should compile without errors.

2. **Runtime Test**
   - Start backend: `cd apps/api && npm run dev`
   - Start frontend: `cd apps/web && npm run dev`
   - Navigate to `http://localhost:3000/checkout`
   - **Expected:** See `$84.70` and `Paid` in green (not red)

3. **OpenAPI Validation**
   ```bash
   npx @redocly/cli lint contracts/openapi.yaml
   ```
   Should pass validation.

---

## Rollback Plan

If issues arise, revert in reverse order:

1. Revert `openapi.yaml` (documentation only - zero runtime impact)
2. Revert `CheckoutSummary.tsx` (UI only - backend unaffected)
3. Revert `checkoutClient.ts` (type definitions only - runtime unchanged)

**Risk Level:** 🟢 **LOW** - All changes are frontend-only, backend is unchanged.

---

## Additional Recommendations

1. **Add PropTypes or Zod validation** to runtime-validate API responses
2. **Add integration test** that calls real API and asserts response shape
3. **Set up OpenAPI code generation** to auto-generate TypeScript types from spec
4. **Add CI check** to detect future drift (compare OpenAPI vs actual responses)

---

**Patch Generation Complete** - Ready for contract test creation (Task 3)
