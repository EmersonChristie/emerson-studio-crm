import { z } from 'zod';
import { ArtworkCreateNestedManyWithoutCategoriesInputObjectSchema } from './ArtworkCreateNestedManyWithoutCategoriesInput.schema';
import { ImageCreateNestedOneWithoutArtworkCategoryMainInputObjectSchema } from './ImageCreateNestedOneWithoutArtworkCategoryMainInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryCreateInput> = z
  .object({
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artworks: z.lazy(() => ArtworkCreateNestedManyWithoutCategoriesInputObjectSchema).optional(),
    mainImage: z.lazy(() => ImageCreateNestedOneWithoutArtworkCategoryMainInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCategoryCreateInputObjectSchema = Schema;
