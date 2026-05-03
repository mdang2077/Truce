"use client";
interface PatchPanelProps {
  onNext: () => void;
  onBack: () => void;
}
export default function PatchPanel({ onNext, onBack }: PatchPanelProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Generated Patch</h1>
      <p className="text-gray-600 mb-6">Bob's code changes to fix the drift</p>

      <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>🤖 Bob's Strategy:</strong> Align frontend and OpenAPI to
          backend contract (integer cents = best practice)
        </p>
      </div>

      <div className="space-y-6">
        {/* File 1: checkoutClient.ts */}
        <div>
          <h3 className="font-bold text-lg mb-2">
            📄 apps/web/src/api/checkoutClient.ts
          </h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <div className="text-gray-500">
              // Update TypeScript interface to match backend
            </div>
            <div className="text-blue-400 mt-2">
              export interface CheckoutResponse {"{"}
            </div>
            <div className="ml-4">orderId: string;</div>
            <div className="text-red-400 ml-4">
              - total: number;{" "}
              <span className="text-gray-500">
                // ← OLD: backend no longer returns this
              </span>
            </div>
            <div className="text-green-400 ml-4">
              + totalCents: number;{" "}
              <span className="text-gray-500">
                // ← FIXED: backend returns integer cents
              </span>
            </div>
            <div className="ml-4">status: string;</div>
            <div className="text-blue-400">{"}"}</div>
          </div>
        </div>

        {/* File 2: CheckoutSummary.tsx */}
        <div>
          <h3 className="font-bold text-lg mb-2">
            📄 apps/web/src/components/CheckoutSummary.tsx
          </h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <div className="text-gray-500">
              // Convert integer cents to dollars for display
            </div>
            <div className="text-blue-400 mt-2">
              export function formatCheckout(order: CheckoutResponse) {"{"}
            </div>
            <div className="text-red-400 ml-4">
              - const totalValue = order.total !== undefined ?
              order.total.toFixed(2) : 'NaN';
            </div>
            <div className="text-green-400 ml-4">
              + const totalValue = (order.totalCents / 100).toFixed(2);
            </div>
            <div className="mt-2 ml-4">return {"{"}</div>
            <div className="ml-8">id: order.orderId,</div>
            <div className="ml-8">
              total: `$${"{"}totalValue{"}"}`,
            </div>
            <div className="text-red-400 ml-8">
              - statusLabel: order.status === 'paid' ? 'Paid' : 'Unknown',
            </div>
            <div className="text-green-400 ml-8">
              + statusLabel: order.status.toUpperCase() === 'PAID' ? 'Paid' :
              'Unknown',
            </div>
            <div className="ml-4">{"}"};</div>
            <div className="text-blue-400">{"}"}</div>
          </div>
        </div>

        {/* File 3: openapi.yaml */}
        <div>
          <h3 className="font-bold text-lg mb-2">📄 contracts/openapi.yaml</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <div className="text-gray-500">
              // Update API documentation to match backend
            </div>
            <div className="text-blue-400 mt-2">properties:</div>
            <div className="ml-4">orderId:</div>
            <div className="ml-8">type: string</div>
            <div className="text-red-400 ml-4">- total:</div>
            <div className="text-red-400 ml-8">- type: number</div>
            <div className="text-red-400 ml-8">
              - description: Total order amount in dollars
            </div>
            <div className="text-green-400 ml-4">+ totalCents:</div>
            <div className="text-green-400 ml-8">+ type: integer</div>
            <div className="text-green-400 ml-8">
              + description: Total order amount in cents (integer to avoid
              floating-point errors)
            </div>
            <div className="text-green-400 ml-8">+ example: 8470</div>
            <div className="ml-4">status:</div>
            <div className="ml-8">type: string</div>
            <div className="text-red-400 ml-8">
              - enum: ["pending", "paid", "failed"]
            </div>
            <div className="text-green-400 ml-8">
              + enum: ["PENDING", "PAID", "FAILED"]
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-sm text-green-900">
          <strong>✅ Impact:</strong> Users will see{" "}
          <span className="font-mono">$84.70</span> and{" "}
          <span className="font-mono">Paid</span> instead of{" "}
          <span className="font-mono text-red-600">$NaN</span> and{" "}
          <span className="font-mono text-red-600">Unknown</span>
        </p>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Next: Contract Test →
        </button>
      </div>
    </div>
  );
}
