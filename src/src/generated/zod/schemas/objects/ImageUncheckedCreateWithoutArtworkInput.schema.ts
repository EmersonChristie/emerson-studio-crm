import { z } from 'zod';
import { ArtworkUncheckedCreateNestedOneWithoutMainImageInputObjectSchema } from './ArtworkUncheckedCreateNestedOneWithoutMainImageInput.schema';
import { ArtworkCategoryUncheckedCreateNestedOneWithoutMainImageInputObjectSchema } from './ArtworkCategoryUncheckedCreateNestedOneWithoutMainImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUncheckedCreateWithoutArtworkInput> = z
  .object({
    id: z.number().optional(),
    url: z.string(),
    altText: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isMain: z.boolean().optional(),
    artworkMain: z.lazy(() => ArtworkUncheckedCreateNestedOneWithoutMainImageInputObjectSchema).optional(),
    artworkCategoryMain: z
      .lazy(() => ArtworkCategoryUncheckedCreateNestedOneWithoutMainImageInputObjectSchema)
      .optional(),
  })
  .strict();

export const ImageUncheckedCreateWithoutArtworkInputObjectSchema = Schema;
