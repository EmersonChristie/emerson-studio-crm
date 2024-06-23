import { z } from 'zod';
import { ArtworkCreateNestedOneWithoutImagesInputObjectSchema } from './ArtworkCreateNestedOneWithoutImagesInput.schema';
import { ArtworkCategoryCreateNestedOneWithoutMainImageInputObjectSchema } from './ArtworkCategoryCreateNestedOneWithoutMainImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCreateWithoutArtworkMainInput> = z
  .object({
    url: z.string(),
    altText: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isMain: z.boolean().optional(),
    artwork: z.lazy(() => ArtworkCreateNestedOneWithoutImagesInputObjectSchema).optional(),
    artworkCategoryMain: z.lazy(() => ArtworkCategoryCreateNestedOneWithoutMainImageInputObjectSchema).optional(),
  })
  .strict();

export const ImageCreateWithoutArtworkMainInputObjectSchema = Schema;
