// apps/web/src/pages/checkout.tsx
'use client';
import { useEffect, useState } from 'react';
import { CheckoutResponse, fetchCheckout } from '../api/checkoutClient';
import CheckoutSummary from '../components/CheckoutSummary';

export default function CheckoutPage() {
  const [order, setOrder] = useState<CheckoutResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCheckout()
      .then(setOrder)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8 text-gray-500">Loading...</div>;
  if (!order) return <div className="p-8 text-red-500">Failed to load order</div>;

  return <CheckoutSummary order={order} />;
}
