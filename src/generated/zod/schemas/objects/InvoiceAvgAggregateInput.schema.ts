import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    total: z.literal(true).optional(),
    tax: z.literal(true).optional(),
    discount: z.literal(true).optional(),
  })
  .strict();

export const InvoiceAvgAggregateInputObjectSchema = Schema;
