import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    message: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    contactId: z.literal(true).optional(),
    status: z.literal(true).optional(),
  })
  .strict();

export const InquiryMinAggregateInputObjectSchema = Schema;
