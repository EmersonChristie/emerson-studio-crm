import { z } from 'zod';
import { ArtworkCategoryUpdateWithoutMainImageInputObjectSchema } from './ArtworkCategoryUpdateWithoutMainImageInput.schema';
import { ArtworkCategoryUncheckedUpdateWithoutMainImageInputObjectSchema } from './ArtworkCategoryUncheckedUpdateWithoutMainImageInput.schema';
import { ArtworkCategoryCreateWithoutMainImageInputObjectSchema } from './ArtworkCategoryCreateWithoutMainImageInput.schema';
import { ArtworkCategoryUncheckedCreateWithoutMainImageInputObjectSchema } from './ArtworkCategoryUncheckedCreateWithoutMainImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkCategoryUpsertWithoutMainImageInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtworkCategoryUpdateWithoutMainImageInputObjectSchema),
      z.lazy(() => ArtworkCategoryUncheckedUpdateWithoutMainImageInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtworkCategoryCreateWithoutMainImageInputObjectSchema),
      z.lazy(() => ArtworkCategoryUncheckedCreateWithoutMainImageInputObjectSchema),
    ]),
  })
  .strict();

export const ArtworkCategoryUpsertWithoutMainImageInputObjectSchema = Schema;
