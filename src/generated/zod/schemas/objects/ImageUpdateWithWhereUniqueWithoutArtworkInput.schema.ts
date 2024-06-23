import { z } from 'zod';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutArtworkInputObjectSchema } from './ImageUpdateWithoutArtworkInput.schema';
import { ImageUncheckedUpdateWithoutArtworkInputObjectSchema } from './ImageUncheckedUpdateWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutArtworkInput> = z
  .object({
    where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ImageUpdateWithoutArtworkInputObjectSchema),
      z.lazy(() => ImageUncheckedUpdateWithoutArtworkInputObjectSchema),
    ]),
  })
  .strict();

export const ImageUpdateWithWhereUniqueWithoutArtworkInputObjectSchema = Schema;
