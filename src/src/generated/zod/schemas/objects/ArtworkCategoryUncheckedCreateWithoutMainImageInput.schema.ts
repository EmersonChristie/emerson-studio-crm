import { z } from 'zod';
import { ArtworkUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema } from './ArtworkUncheckedCreateNestedManyWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryUncheckedCreateWithoutMainImageInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artworks: z.lazy(() => ArtworkUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCategoryUncheckedCreateWithoutMainImageInputObjectSchema = Schema;
