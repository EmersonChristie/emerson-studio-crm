import { z } from 'zod';
import { ImageUpdateWithoutArtworkCategoryMainInputObjectSchema } from './ImageUpdateWithoutArtworkCategoryMainInput.schema';
import { ImageUncheckedUpdateWithoutArtworkCategoryMainInputObjectSchema } from './ImageUncheckedUpdateWithoutArtworkCategoryMainInput.schema';
import { ImageCreateWithoutArtworkCategoryMainInputObjectSchema } from './ImageCreateWithoutArtworkCategoryMainInput.schema';
import { ImageUncheckedCreateWithoutArtworkCategoryMainInputObjectSchema } from './ImageUncheckedCreateWithoutArtworkCategoryMainInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUpsertWithoutArtworkCategoryMainInput> = z
  .object({
    update: z.union([
      z.lazy(() => ImageUpdateWithoutArtworkCategoryMainInputObjectSchema),
      z.lazy(() => ImageUncheckedUpdateWithoutArtworkCategoryMainInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ImageCreateWithoutArtworkCategoryMainInputObjectSchema),
      z.lazy(() => ImageUncheckedCreateWithoutArtworkCategoryMainInputObjectSchema),
    ]),
  })
  .strict();

export const ImageUpsertWithoutArtworkCategoryMainInputObjectSchema = Schema;
