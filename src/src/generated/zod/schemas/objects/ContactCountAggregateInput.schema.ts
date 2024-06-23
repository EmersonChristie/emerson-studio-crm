import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    firstName: z.literal(true).optional(),
    lastName: z.literal(true).optional(),
    email: z.literal(true).optional(),
    phone: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    createdById: z.literal(true).optional(),
    notes: z.literal(true).optional(),
    source: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ContactCountAggregateInputObjectSchema = Schema;
