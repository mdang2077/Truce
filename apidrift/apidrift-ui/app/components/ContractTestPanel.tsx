'use client';
interface ContractTestPanelProps { onNext: () => void; onBack: () => void; }
export default function ContractTestPanel({ onNext, onBack }: ContractTestPanelProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Contract Test</h1>
      <p className="text-gray-600 mb-6">Regression test to prevent future drift</p>
      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div className="text-purple-400">test</div>
        <div>("checkout response matches frontend expectations", async () => {'{'}</div>
        <div className="ml-4">const response = await request(app).post("/checkout");</div>
        <div className="ml-4 text-green-400">expect(response.body.totalCents).toBeDefined();</div>
        <div className="ml-4 text-green-400">expect(response.body.total).toBeUndefined();</div>
        <div className="ml-4 text-green-400">expect(response.body.status).toBe("PAID");</div>
        <div>{'}'});</div>
      </div>
      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-green-900"><strong>✅ Test Status:</strong> This test will fail on the old contract and pass after the patch is applied.</p>
      </div>
      <div className="flex justify-between mt-8">
        <button onClick={onBack} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">← Back</button>
        <button onClick={onNext} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Next: Ticket Routing →</button>
      </div>
    </div>
  );
}
