'use client';
interface PRSummaryProps { onBack: () => void; }
export default function PRSummary({ onBack }: PRSummaryProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">PR Summary</h1>
      <p className="text-gray-600 mb-6">Bob-generated pull request description</p>
      <div className="bg-gray-50 border rounded-lg p-6 font-mono text-sm">
        <h3 className="font-bold text-lg mb-4"># Fix checkout API contract drift</h3>
        <div className="space-y-4 text-gray-800">
          <div><strong>## Drift Found</strong><br/>- Frontend expected `total`, backend returned `totalCents`<br/>- Frontend expected lowercase status, backend returned uppercase<br/>- OpenAPI documented the old response shape</div>
          <div><strong>## Fix</strong><br/>- Updated frontend formatter to use totalCents<br/>- Updated status mapping for uppercase enum<br/>- Updated OpenAPI schema<br/>- Added contract regression test</div>
          <div><strong>## Risk</strong><br/>Low. Backend contract remains canonical.<br/>Rollback: Revert frontend formatter only.</div>
        </div>
      </div>
      <div className="mt-8 p-6 bg-blue-900 text-white rounded-lg text-center">
        <p className="text-2xl font-bold mb-2">🎉 Demo Complete!</p>
        <p className="text-blue-200">APIDrift keeps your API promises from silently breaking your product.</p>
      </div>
      <div className="flex justify-between mt-8">
        <button onClick={onBack} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">← Back</button>
        <button onClick={() => window.location.reload()} className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">🔄 Restart Demo</button>
      </div>
    </div>
  );
}
