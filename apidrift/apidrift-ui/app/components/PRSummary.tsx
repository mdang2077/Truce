"use client";
interface PRSummaryProps {
  onBack: () => void;
}
export default function PRSummary({ onBack }: PRSummaryProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">PR Summary</h1>
      <p className="text-gray-600 mb-6">
        Bob-generated pull request description
      </p>

      <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>🤖 Bob Generated:</strong> Complete PR description with impact
          analysis and rollback plan
        </p>
      </div>

      <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 text-sm">
        <h3 className="font-bold text-2xl mb-4">
          Pull Request: Fix API Contract Drift in Checkout Flow
        </h3>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-lg mb-2">🔍 Drift Summary</h4>
            <p className="text-gray-800">
              <strong>Critical API contract drift detected</strong> between
              backend, frontend, and OpenAPI specification in the checkout flow.
              Backend evolved to use integer cents (
              <code className="bg-gray-200 px-1 rounded">totalCents</code>) and
              uppercase status enums (
              <code className="bg-gray-200 px-1 rounded">"PAID"</code>), but
              frontend and documentation still expected the old contract.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">👤 User Impact</h4>
            <div className="bg-red-50 border border-red-200 rounded p-3 mb-2">
              <p className="font-bold text-red-900">Before This Fix:</p>
              <p className="font-mono text-sm text-red-800">
                Total: $NaN | Status: Unknown
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded p-3">
              <p className="font-bold text-green-900">After This Fix:</p>
              <p className="font-mono text-sm text-green-800">
                Total: $84.70 | Status: Paid
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">📝 Files Changed</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-800">
              <li>
                <code className="bg-gray-200 px-1 rounded">
                  apps/web/src/api/checkoutClient.ts
                </code>{" "}
                - Updated TypeScript interface
              </li>
              <li>
                <code className="bg-gray-200 px-1 rounded">
                  apps/web/src/components/CheckoutSummary.tsx
                </code>{" "}
                - Updated display logic
              </li>
              <li>
                <code className="bg-gray-200 px-1 rounded">
                  contracts/openapi.yaml
                </code>{" "}
                - Updated API documentation
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">✅ Tests Added</h4>
            <p className="text-gray-800">
              <code className="bg-gray-200 px-1 rounded">
                apps/api/src/tests/checkout.contract.test.ts
              </code>{" "}
              - Contract regression test with 3 test cases to prevent future
              drift
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">🏗️ Engineering Rationale</h4>
            <p className="text-gray-800">
              <strong>Why integer cents is canonical:</strong> Avoids
              floating-point precision errors (0.1 + 0.2 ≠ 0.3). Industry
              standard used by Stripe, PayPal, and other payment processors.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">
              ⚠️ Rollback Risk Assessment
            </h4>
            <div className="bg-green-50 border border-green-200 rounded p-3">
              <p className="font-bold text-green-900">Risk Level: 🟢 LOW</p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-800">
                <li>Frontend-only changes (no backend modifications)</li>
                <li>No database schema changes</li>
                <li>Easy rollback: revert commits in reverse order</li>
                <li>Estimated rollback time: less than 5 minutes</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">✨ Summary</h4>
            <p className="text-gray-800">
              This PR fixes critical API contract drift that caused the checkout
              confirmation page to display
              <code className="bg-red-100 text-red-800 px-1 rounded">
                $NaN
              </code>{" "}
              and
              <code className="bg-red-100 text-red-800 px-1 rounded">
                Unknown
              </code>{" "}
              status. The fix aligns frontend and documentation to the backend's
              integer cents pattern. All changes are frontend-only with low
              rollback risk. Contract tests added to prevent future drift.
            </p>
            <p className="font-bold text-green-700 mt-2">
              Merge Confidence: 🟢 HIGH
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-900 text-white rounded-lg text-center">
        <p className="text-2xl font-bold mb-2">🎉 Demo Complete!</p>
        <p className="text-blue-200">
          APIDrift keeps your API promises from silently breaking your product.
        </p>
        <p className="text-sm text-blue-300 mt-2">
          Bob detected the drift, generated the fix, wrote the tests, and
          created this PR summary.
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
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          🔄 Restart Demo
        </button>
      </div>
    </div>
  );
}

// Made with Bob
