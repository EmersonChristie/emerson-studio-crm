import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    total: z.literal(true).optional(),
    issuedDate: z.literal(true).optional(),
    dueDate: z.literal(true).optional(),
    status: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    paymentUrl: z.literal(true).optional(),
    tax: z.literal(true).optional(),
    discount: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const InvoiceCountAggregateInputObjectSchema = Schema;
