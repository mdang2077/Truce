'use client';
interface FixStrategyProps { onNext: () => void; onBack: () => void; }
export default function FixStrategy({ onNext, onBack }: FixStrategyProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Bob's Fix Strategy</h1>
      <p className="text-gray-600 mb-6">Recommended approach to resolve the drift</p>
      <div className="space-y-6">
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
          <h3 className="font-bold text-xl mb-3 text-green-900">✅ Recommended: Update Frontend + Docs</h3>
          <p className="mb-4">Sync frontend and OpenAPI to match the backend's intentional change.</p>
          <div className="bg-white p-4 rounded border">
            <p className="font-semibold mb-2">Why this is correct:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Integer cents avoids floating-point currency bugs</li>
              <li>Backend change appears intentional (best practice)</li>
              <li>Frontend and docs are stale, not incorrect</li>
              <li>Uppercase enums are more conventional</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6">
          <h3 className="font-bold text-xl mb-3 text-gray-700">Alternative: Revert Backend</h3>
          <p className="mb-2">Map totalCents back to total in the backend response.</p>
          <p className="text-sm text-gray-600">Not recommended: loses the benefit of integer currency handling.</p>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <button onClick={onBack} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">← Back</button>
        <button onClick={onNext} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Next: View Patch →</button>
      </div>
    </div>
  );
}
