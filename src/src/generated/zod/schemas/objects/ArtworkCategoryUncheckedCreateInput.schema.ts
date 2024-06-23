import { z } from 'zod';
import { ArtworkUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema } from './ArtworkUncheckedCreateNestedManyWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    mainImageId: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artworks: z.lazy(() => ArtworkUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkCategoryUncheckedCreateInputObjectSchema = Schema;
