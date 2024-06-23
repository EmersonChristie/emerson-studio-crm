import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    contactId: z.literal(true).optional(),
    artworkId: z.literal(true).optional(),
    invoiceId: z.literal(true).optional(),
  })
  .strict();

export const SaleSumAggregateInputObjectSchema = Schema;
