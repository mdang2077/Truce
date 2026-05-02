// apps/api/src/server.ts
import express from 'express';
import cors from 'cors';
import checkoutRouter from './routes/checkout';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api', checkoutRouter);

app.listen(PORT, () => {
  console.log(`APIDrift demo API running on http://localhost:${PORT}`);
  console.log(`POST http://localhost:${PORT}/api/checkout — returns drifted response`);
});

export default app;
