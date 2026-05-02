'use client';
interface TicketRoutingProps { onNext: () => void; onBack: () => void; }
export default function TicketRouting({ onNext, onBack }: TicketRoutingProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Ticket Routing</h1>
      <p className="text-gray-600 mb-6">Automated workflow orchestration</p>
      <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
        <h3 className="font-bold text-xl mb-4">Orchestrated Actions</h3>
        <ul className="space-y-3">
          <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Created high-priority contract drift task</li>
          <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Assigned to: API Platform Team</li>
          <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Notified: Frontend Owner + Backend Owner</li>
          <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Attached: Bob drift report + patch diff</li>
        </ul>
        <div className="mt-6 p-4 bg-white rounded border">
          <p className="font-semibold">Task: Fix checkout API contract drift</p>
          <p className="text-sm text-gray-600 mt-2">Priority: High | Due: Before next deploy</p>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <button onClick={onBack} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">← Back</button>
        <button onClick={onNext} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Next: Fixed Result →</button>
      </div>
    </div>
  );
}
