import { z } from 'zod';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutArtworkInputObjectSchema } from './ImageUpdateWithoutArtworkInput.schema';
import { ImageUncheckedUpdateWithoutArtworkInputObjectSchema } from './ImageUncheckedUpdateWithoutArtworkInput.schema';
import { ImageCreateWithoutArtworkInputObjectSchema } from './ImageCreateWithoutArtworkInput.schema';
import { ImageUncheckedCreateWithoutArtworkInputObjectSchema } from './ImageUncheckedCreateWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutArtworkInput> = z
  .object({
    where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ImageUpdateWithoutArtworkInputObjectSchema),
      z.lazy(() => ImageUncheckedUpdateWithoutArtworkInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ImageCreateWithoutArtworkInputObjectSchema),
      z.lazy(() => ImageUncheckedCreateWithoutArtworkInputObjectSchema),
    ]),
  })
  .strict();

export const ImageUpsertWithWhereUniqueWithoutArtworkInputObjectSchema = Schema;
