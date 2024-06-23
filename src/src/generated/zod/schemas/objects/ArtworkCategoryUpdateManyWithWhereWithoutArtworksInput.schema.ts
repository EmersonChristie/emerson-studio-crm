import { z } from 'zod';
import { ArtworkCategoryScalarWhereInputObjectSchema } from './ArtworkCategoryScalarWhereInput.schema';
import { ArtworkCategoryUpdateManyMutationInputObjectSchema } from './ArtworkCategoryUpdateManyMutationInput.schema';
import { ArtworkCategoryUncheckedUpdateManyWithoutCategoriesInputObjectSchema } from './ArtworkCategoryUncheckedUpdateManyWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryUpdateManyWithWhereWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => ArtworkCategoryScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtworkCategoryUpdateManyMutationInputObjectSchema),
      z.lazy(() => ArtworkCategoryUncheckedUpdateManyWithoutCategoriesInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkCategoryUpdateManyWithWhereWithoutArtworksInputObjectSchema = Schema;
