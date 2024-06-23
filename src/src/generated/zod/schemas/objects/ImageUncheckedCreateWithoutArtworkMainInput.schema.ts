import { z } from 'zod';
import { ArtworkCategoryUncheckedCreateNestedOneWithoutMainImageInputObjectSchema } from './ArtworkCategoryUncheckedCreateNestedOneWithoutMainImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUncheckedCreateWithoutArtworkMainInput> = z
  .object({
    id: z.number().optional(),
    url: z.string(),
    altText: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artworkId: z.number().optional().nullable(),
    isMain: z.boolean().optional(),
    artworkCategoryMain: z
      .lazy(() => ArtworkCategoryUncheckedCreateNestedOneWithoutMainImageInputObjectSchema)
      .optional(),
  })
  .strict();

export const ImageUncheckedCreateWithoutArtworkMainInputObjectSchema = Schema;
