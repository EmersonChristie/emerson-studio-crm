import { z } from 'zod';
import { ArtworkCreateNestedOneWithoutMainImageInputObjectSchema } from './ArtworkCreateNestedOneWithoutMainImageInput.schema';
import { ArtworkCreateNestedOneWithoutImagesInputObjectSchema } from './ArtworkCreateNestedOneWithoutImagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCreateWithoutArtworkCategoryMainInput> = z
  .object({
    url: z.string(),
    altText: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isMain: z.boolean().optional(),
    artworkMain: z.lazy(() => ArtworkCreateNestedOneWithoutMainImageInputObjectSchema).optional(),
    artwork: z.lazy(() => ArtworkCreateNestedOneWithoutImagesInputObjectSchema).optional(),
  })
  .strict();

export const ImageCreateWithoutArtworkCategoryMainInputObjectSchema = Schema;
