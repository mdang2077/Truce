'use client';

interface SeverityImpactProps {
  onNext: () => void;
  onBack: () => void;
}

export default function SeverityImpact({ onNext, onBack }: SeverityImpactProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Severity & Business Impact</h1>
      <p className="text-gray-600 mb-6">
        Understanding the real-world consequences of this drift
      </p>

      <div className="bg-red-50 border-4 border-red-500 rounded-lg p-8 mb-6">
        <div className="flex items-center mb-4">
          <span className="text-5xl mr-4">🔴</span>
          <div>
            <h2 className="text-3xl font-bold text-red-900">HIGH SEVERITY</h2>
            <p className="text-red-700 font-semibold">Breaking - Causes runtime failure</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Business Impact:</h3>
            <p className="text-gray-800">
              Checkout confirmation displays incorrect payment totals and unknown payment status. 
              This affects a <strong>revenue-critical user flow</strong> and may cause transaction abandonment.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Affected Flow:</h3>
            <p className="text-gray-800 font-mono text-sm bg-white p-3 rounded border">
              checkout.tsx → /api/checkout route → CheckoutSummary component
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Risk Level:</h3>
            <p className="text-gray-800">
              <strong className="text-red-600">Breaking</strong> — Frontend cannot display correct values. 
              Users see $NaN and "Unknown" status instead of actual payment information.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Recommendation:</h3>
            <p className="text-gray-800">
              Sync frontend and OpenAPI to backend contract. The backend change (integer cents) 
              is intentional and follows best practices for currency handling.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
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
          Next: Fix Strategy →
        </button>
      </div>
    </div>
  );
}
