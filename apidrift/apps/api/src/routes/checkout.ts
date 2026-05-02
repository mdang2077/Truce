// apps/api/src/routes/checkout.ts
import { Router } from 'express';

const router = Router();

// DRIFTED: backend changed from { total: 84.70, status: "paid" }
// Frontend still expects old contract — this causes $NaN and "Unknown"
router.post('/checkout', (req, res) => {
  res.json({
    orderId: "ORD-1042",
    totalCents: 8470,   // was: total: 84.70
    status: "PAID"      // was: status: "paid"
  });
});

export default router;
