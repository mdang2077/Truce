'use client';

interface BrokenCheckoutProps {
  onNext: () => void;
}

export default function BrokenCheckout({ onNext }: BrokenCheckoutProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Screen 1: The Problem</h1>
      <p className="text-gray-600 mb-6">
        This is what users see when API contracts drift
      </p>

      <div className="bg-white border-4 border-red-500 rounded-lg p-8 mb-6">
        <h2 className="text-2xl font-bold mb-6">Checkout Complete</h2>
        <div className="space-y-4">
          <div>
            <span className="text-gray-500">Order ID:</span>
            <span className="ml-2 font-mono">ORD-1042</span>
          </div>
          <div>
            <span className="text-gray-500">Total:</span>
            <span className="ml-2 text-6xl font-bold text-red-600">$NaN</span>
          </div>
          <div>
            <span className="text-gray-500">Status:</span>
            <span className="ml-2 text-3xl font-bold text-red-600">Unknown</span>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <p className="text-red-900">
          <strong>⚠️ The Bug:</strong> The checkout page displays $NaN and "Unknown" status. 
          The backend is working correctly, the frontend code has no syntax errors, 
          but the product is broken because they no longer agree.
        </p>
      </div>

      <button
        onClick={onNext}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
      >
        Scan for API Drift →
      </button>
    </div>
  );
}

// Made with Bob
