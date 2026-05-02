'use client';
interface PatchPanelProps { onNext: () => void; onBack: () => void; }
export default function PatchPanel({ onNext, onBack }: PatchPanelProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Generated Patch</h1>
      <p className="text-gray-600 mb-6">Bob's code changes to fix the drift</p>
      <div className="space-y-4">
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <div className="text-green-400">// Frontend: CheckoutSummary.tsx</div>
          <div className="text-red-400">- total: `$${'{'}order.total.toFixed(2){'}`'},</div>
          <div className="text-green-400">+ total: `$${'{'}(order.totalCents / 100).toFixed(2){'}`'},</div>
          <div className="text-red-400 mt-2">- statusLabel: order.status === "paid" ? "Paid" : "Unknown"</div>
          <div className="text-green-400">+ statusLabel: order.status === "PAID" ? "Paid" : "Unknown"</div>
        </div>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <div className="text-green-400">// OpenAPI: openapi.yaml</div>
          <div className="text-red-400">- total:</div>
          <div className="text-red-400">-   type: number</div>
          <div className="text-green-400">+ totalCents:</div>
          <div className="text-green-400">+   type: integer</div>
          <div className="text-green-400">+   description: Total in cents</div>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <button onClick={onBack} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">← Back</button>
        <button onClick={onNext} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Next: Contract Test →</button>
      </div>
    </div>
  );
}
