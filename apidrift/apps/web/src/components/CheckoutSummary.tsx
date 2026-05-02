// apps/web/src/components/CheckoutSummary.tsx
// DRIFTED: reads order.total which is undefined → $NaN
// reads order.status === "paid" which never matches "PAID" → "Unknown"

import { CheckoutResponse } from '../api/checkoutClient';

export function formatCheckout(order: CheckoutResponse) {
  return {
    id: order.orderId,
    total: `$${order.total.toFixed(2)}`,                        // ← $NaN (total is undefined)
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
