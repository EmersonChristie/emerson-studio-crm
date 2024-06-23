import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdById: z.literal(true).optional(),
  })
  .strict();

export const ContactSumAggregateInputObjectSchema = Schema;