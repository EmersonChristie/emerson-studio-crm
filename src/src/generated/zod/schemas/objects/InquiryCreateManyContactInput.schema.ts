import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryCreateManyContactInput> = z
  .object({
    id: z.number().optional(),
    message: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    status: z.string().optional(),
  })
  .strict();

export const InquiryCreateManyContactInputObjectSchema = Schema;
