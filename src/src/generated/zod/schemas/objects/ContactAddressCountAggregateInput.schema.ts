import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    street: z.literal(true).optional(),
    city: z.literal(true).optional(),
    state: z.literal(true).optional(),
    zip: z.literal(true).optional(),
    contactId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ContactAddressCountAggregateInputObjectSchema = Schema;
