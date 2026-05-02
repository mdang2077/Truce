'use client';
export default function FixedCheckout() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">Fixed Checkout</h1>
      <p className="text-gray-600 mb-6">After applying Bob's patch</p>
      <div className="bg-white border-4 border-green-500 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Checkout Complete</h2>
        <div className="space-y-4">
          <div><span className="text-gray-500">Order ID:</span><span className="ml-2 font-mono">ORD-1042</span></div>
          <div><span className="text-gray-500">Total:</span><span className="ml-2 text-6xl font-bold text-green-600">$84.70</span></div>
          <div><span className="text-gray-500">Status:</span><span className="ml-2 text-3xl font-bold text-green-600">Paid</span></div>
        </div>
      </div>
    </div>
  );
}
