// apps/web/src/api/checkoutClient.ts
// DRIFTED: this interface still expects the OLD contract
// Backend now returns totalCents + PAID — this causes $NaN and "Unknown"

export interface CheckoutResponse {
  orderId: string;
  total: number;    // ← OLD: backend no longer returns this
  status: string;   // ← OLD: backend now returns "PAID" not "paid"
}

export async function fetchCheckout(): Promise<CheckoutResponse> {
  const res = await fetch('http://localhost:3001/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: [{ id: '1', qty: 1 }] }),
  });
  return res.json();
}
