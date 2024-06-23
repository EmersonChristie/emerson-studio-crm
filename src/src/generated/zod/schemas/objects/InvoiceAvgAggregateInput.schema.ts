import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    total: z.literal(true).optional(),
    createdById: z.literal(true).optional(),
    taxPercentage: z.literal(true).optional(),
    discountPercentage: z.literal(true).optional(),
  })
  .strict();

export const InvoiceAvgAggregateInputObjectSchema = Schema;
