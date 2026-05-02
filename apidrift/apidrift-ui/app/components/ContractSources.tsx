'use client';

interface ContractSourcesProps {
  onNext: () => void;
  onBack: () => void;
}

export default function ContractSources({ onNext, onBack }: ContractSourcesProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Contract Sources</h1>
      <p className="text-gray-600 mb-6">
        What each layer says about the checkout response
      </p>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Frontend */}
        <div className="border-2 border-blue-300 rounded-lg p-6 bg-blue-50">
          <h3 className="font-bold text-lg mb-4 text-blue-900">Frontend Expects</h3>
          <div className="font-mono text-sm space-y-2">
            <div><span className="text-gray-600">total:</span> <span className="font-bold">number</span></div>
            <div><span className="text-gray-600">status:</span> <span className="font-bold">"paid"</span></div>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            From: checkoutClient.ts, CheckoutSummary.tsx
          </p>
        </div>

        {/* Backend */}
        <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50">
          <h3 className="font-bold text-lg mb-4 text-green-900">Backend Returns</h3>
          <div className="font-mono text-sm space-y-2">
            <div><span className="text-gray-600">totalCents:</span> <span className="font-bold">integer</span></div>
            <div><span className="text-gray-600">status:</span> <span className="font-bold">"PAID"</span></div>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            From: checkout.ts route handler
          </p>
        </div>

        {/* OpenAPI */}
        <div className="border-2 border-purple-300 rounded-lg p-6 bg-purple-50">
          <h3 className="font-bold text-lg mb-4 text-purple-900">OpenAPI Says</h3>
          <div className="font-mono text-sm space-y-2">
            <div><span className="text-gray-600">total:</span> <span className="font-bold">number</span></div>
            <div><span className="text-gray-600">status:</span> <span className="font-bold">"paid"</span></div>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            From: openapi.yaml
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <p className="text-yellow-900">
          <strong>⚠️ Mismatch Detected:</strong> Backend changed to totalCents and uppercase status, 
          but frontend and OpenAPI still expect the old contract.
        </p>
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
          Next: Drift Matrix →
        </button>
      </div>
    </div>
  );
}

// Made with Bob
