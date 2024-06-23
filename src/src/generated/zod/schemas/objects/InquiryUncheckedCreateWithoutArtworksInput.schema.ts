import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUncheckedCreateWithoutArtworksInput> = z
  .object({
    id: z.number().optional(),
    message: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    contactId: z.number(),
    status: z.string().optional(),
  })
  .strict();

export const InquiryUncheckedCreateWithoutArtworksInputObjectSchema = Schema;
