import { z } from 'zod';
import { ImageUpdateWithoutArtworkMainInputObjectSchema } from './ImageUpdateWithoutArtworkMainInput.schema';
import { ImageUncheckedUpdateWithoutArtworkMainInputObjectSchema } from './ImageUncheckedUpdateWithoutArtworkMainInput.schema';
import { ImageCreateWithoutArtworkMainInputObjectSchema } from './ImageCreateWithoutArtworkMainInput.schema';
import { ImageUncheckedCreateWithoutArtworkMainInputObjectSchema } from './ImageUncheckedCreateWithoutArtworkMainInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUpsertWithoutArtworkMainInput> = z
  .object({
    update: z.union([
      z.lazy(() => ImageUpdateWithoutArtworkMainInputObjectSchema),
      z.lazy(() => ImageUncheckedUpdateWithoutArtworkMainInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ImageCreateWithoutArtworkMainInputObjectSchema),
      z.lazy(() => ImageUncheckedCreateWithoutArtworkMainInputObjectSchema),
    ]),
  })
  .strict();

export const ImageUpsertWithoutArtworkMainInputObjectSchema = Schema;
