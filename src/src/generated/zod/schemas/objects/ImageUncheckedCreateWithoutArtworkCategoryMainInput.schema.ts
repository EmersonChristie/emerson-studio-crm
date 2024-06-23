import { z } from 'zod';
import { ArtworkUncheckedCreateNestedOneWithoutMainImageInputObjectSchema } from './ArtworkUncheckedCreateNestedOneWithoutMainImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUncheckedCreateWithoutArtworkCategoryMainInput> = z
  .object({
    id: z.number().optional(),
    url: z.string(),
    altText: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artworkId: z.number().optional().nullable(),
    isMain: z.boolean().optional(),
    artworkMain: z.lazy(() => ArtworkUncheckedCreateNestedOneWithoutMainImageInputObjectSchema).optional(),
  })
  .strict();

export const ImageUncheckedCreateWithoutArtworkCategoryMainInputObjectSchema = Schema;
