'use client';

interface BobEvidenceTrailProps {
  onNext: () => void;
  onBack: () => void;
}

export default function BobEvidenceTrail({ onNext, onBack }: BobEvidenceTrailProps) {
  const evidence = [
    "Found frontend reads checkout.total in checkoutClient.ts",
    "Found backend route now returns totalCents instead of total",
    "Found OpenAPI spec still documents total as a decimal number",
    "Found frontend expects status === \"paid\"",
    "Found backend returns status === \"PAID\"",
    "Determined backend change is intentional — integer cents safer for currency precision",
    "Recommended syncing frontend and OpenAPI to backend contract"
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Bob's Evidence Trail</h1>
      <p className="text-gray-600 mb-6">
        How Bob analyzed the codebase to detect drift
      </p>

      <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-6">
        <div className="flex items-start mb-4">
          <div className="text-4xl mr-4">🤖</div>
          <div>
            <h3 className="font-bold text-lg mb-2">IBM Bob Analysis</h3>
            <p className="text-sm text-gray-700">
              Bob read the entire repository context to trace how the checkout flow works across all layers.
            </p>
          </div>
        </div>

        <ol className="space-y-3">
          {evidence.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="inline-block w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                {idx + 1}
              </span>
              <span className="pt-1">{item}</span>
            </li>
          ))}
        </ol>
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
          Next: Severity & Impact →
        </button>
      </div>
    </div>
  );
}
