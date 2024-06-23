import { z } from 'zod';
import { ImageCreateNestedOneWithoutArtworkCategoryMainInputObjectSchema } from './ImageCreateNestedOneWithoutArtworkCategoryMainInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryCreateWithoutArtworksInput> = z
  .object({
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    mainImage: z.lazy(() => ImageCreateNestedOneWithoutArtworkCategoryMainInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCategoryCreateWithoutArtworksInputObjectSchema = Schema;
