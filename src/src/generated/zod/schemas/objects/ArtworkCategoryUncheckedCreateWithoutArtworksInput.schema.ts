import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryUncheckedCreateWithoutArtworksInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    mainImageId: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const ArtworkCategoryUncheckedCreateWithoutArtworksInputObjectSchema = Schema;
