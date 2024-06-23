import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    date: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    contactId: z.literal(true).optional(),
    artworkId: z.literal(true).optional(),
    invoiceId: z.literal(true).optional(),
    paymentStatus: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const SaleCountAggregateInputObjectSchema = Schema;
