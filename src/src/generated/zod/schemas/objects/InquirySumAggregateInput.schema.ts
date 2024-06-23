import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquirySumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    contactId: z.literal(true).optional(),
  })
  .strict();

export const InquirySumAggregateInputObjectSchema = Schema;
