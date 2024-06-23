import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferUncheckedCreateWithoutArtworkInput> = z
  .object({
    id: z.number().optional(),
    amount: z.number(),
    discount: z.number().optional().nullable(),
    message: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    contactId: z.number(),
  })
  .strict();

export const ArtworkOfferUncheckedCreateWithoutArtworkInputObjectSchema = Schema;
