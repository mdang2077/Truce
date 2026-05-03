import { detectDrift } from './validation/drift-detector';
import { createScenario } from './validation/scenario-loader';

async function main() {
  /*
   * Source file read for this live test:
   * C:/Users/xiate/Documents/CS/examplerepo/backend/routes/orders.ts
   *
   * The detector currently parses literal res.json({ ... }) objects with
   * JSON.parse after light cleanup. The real route uses req.params.orderId,
   * which is valid Express code but not JSON-parseable, so this fixture keeps
   * the same response shape while replacing that one dynamic value with a
   * representative literal. The drifted fields are unchanged:
   * - totalCents instead of total
   * - PENDING instead of pending
   * - quantity instead of qty inside items
   */
  const backendImplementation = `
import { Router } from "express";

export const orderRouter = Router();

orderRouter.get("/:orderId", (req, res) => {
  res.json({
    orderId: "ord_123",
    totalCents: 9999,
    status: "PENDING",
    items: [
      {
        sku: "sku_123",
        quantity: "2",
        price: 49.995
      }
    ]
  });
});
`;

  const openapiSchema = {
    type: 'object',
    required: ['orderId', 'total', 'status', 'items'],
    properties: {
      orderId: {
        type: 'string',
      },
      total: {
        type: 'number',
        description: 'Total in dollars',
        example: 99.99,
      },
      status: {
        type: 'string',
        enum: ['pending', 'paid', 'cancelled'],
      },
      items: {
        type: 'array',
        items: {
          type: 'object',
          required: ['sku', 'qty', 'price'],
          properties: {
            sku: {
              type: 'string',
            },
            qty: {
              type: 'number',
            },
            price: {
              type: 'number',
            },
          },
        },
      },
    },
  };

  const scenario = createScenario('live-test', {
    name: 'Live Broken Repo Test',
    description:
      'Broken repo order endpoint returns a shape that differs from the OpenAPI Order response contract.',
    severity: 'high',
    driftType: 'unknown',
    openapi: {
      path: 'C:/Users/xiate/Documents/CS/examplerepo/openapi/v1.yaml',
      endpoint: '/orders/{orderId}',
      method: 'GET',
      schema: openapiSchema,
    },
    backend: {
      path: 'C:/Users/xiate/Documents/CS/examplerepo/backend/routes/orders.ts',
      implementation: backendImplementation,
    },
    frontend: {
      path: 'C:/Users/xiate/Documents/CS/examplerepo/frontend/api-clients/orderClient.ts',
      usage:
        'getOrder() and createOrder() return Order objects whose frontend type expects total, status, and items[].qty.',
    },
    expectedDetection: {
      driftFound: true,
      severity: 'high',
      fields: [],
    },
  });

  const result = await detectDrift(scenario);
  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
