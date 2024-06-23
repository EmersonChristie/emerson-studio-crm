import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUncheckedCreateWithoutContactInput> = z
  .object({
    id: z.number().optional(),
    message: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artworkId: z.number(),
    status: z.string().optional(),
  })
  .strict();

export const InquiryUncheckedCreateWithoutContactInputObjectSchema = Schema;
