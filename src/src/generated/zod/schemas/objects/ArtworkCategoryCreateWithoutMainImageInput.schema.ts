import { z } from 'zod';
import { ArtworkCreateNestedManyWithoutCategoriesInputObjectSchema } from './ArtworkCreateNestedManyWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryCreateWithoutMainImageInput> = z
  .object({
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artworks: z.lazy(() => ArtworkCreateNestedManyWithoutCategoriesInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCategoryCreateWithoutMainImageInputObjectSchema = Schema;
