'use client';

interface DriftMatrixProps {
  onNext: () => void;
  onBack: () => void;
}

export default function DriftMatrix({ onNext, onBack }: DriftMatrixProps) {
  const driftFields = [
    {
      field: 'Total amount',
      frontend: 'total (number, dollars)',
      backend: 'totalCents (integer, cents)',
      openapi: 'total (number)',
      severity: 'Breaking',
      userImpact: 'Checkout UI shows $NaN'
    },
    {
      field: 'Currency unit',
      frontend: 'dollars',
      backend: 'cents',
      openapi: 'dollars',
      severity: 'Breaking',
      userImpact: 'Price display incorrect even if field name matched'
    },
    {
      field: 'Status enum',
      frontend: 'lowercase ("paid")',
      backend: 'uppercase ("PAID")',
      openapi: 'lowercase ("paid")',
      severity: 'Breaking',
      userImpact: 'Payment status always shows "Unknown"'
    }
  ];

  const getSeverityColor = (severity: string) => {
    if (severity === 'Breaking') return 'bg-red-100 text-red-800 border-red-300';
    if (severity === 'Medium') return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    return 'bg-gray-100 text-gray-800 border-gray-300';
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Drift Matrix</h1>
      <p className="text-gray-600 mb-6">
        Comparing frontend usage, backend implementation, and API documentation
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Field</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Frontend</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Backend</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">OpenAPI</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Severity</th>
            </tr>
          </thead>
          <tbody>
            {driftFields.map((row, idx) => (
              <tr key={idx} className={getSeverityColor(row.severity)}>
                <td className="border border-gray-300 px-4 py-3 font-medium">{row.field}</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">{row.frontend}</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm font-bold">{row.backend}</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">{row.openapi}</td>
                <td className="border border-gray-300 px-4 py-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold border ${getSeverityColor(row.severity)}`}>
                    🔴 {row.severity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>💡 Key Insight:</strong> All three layers disagree. The backend changed intentionally 
          (integer cents = best practice), but frontend and docs weren't updated.
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
          Next: Bob's Evidence →
        </button>
      </div>
    </div>
  );
}

// Made with Bob
