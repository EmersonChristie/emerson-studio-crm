import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    contactId: z.literal(true).optional(),
  })
  .strict();

export const InquiryAvgAggregateInputObjectSchema = Schema;
