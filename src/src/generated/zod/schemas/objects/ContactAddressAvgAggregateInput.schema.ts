import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    contactId: z.literal(true).optional(),
  })
  .strict();

export const ContactAddressAvgAggregateInputObjectSchema = Schema;
