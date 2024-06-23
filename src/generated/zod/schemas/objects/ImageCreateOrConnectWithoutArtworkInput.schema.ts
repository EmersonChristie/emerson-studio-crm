import { z } from 'zod';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageCreateWithoutArtworkInputObjectSchema } from './ImageCreateWithoutArtworkInput.schema';
import { ImageUncheckedCreateWithoutArtworkInputObjectSchema } from './ImageUncheckedCreateWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCreateOrConnectWithoutArtworkInput> = z
  .object({
    where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ImageCreateWithoutArtworkInputObjectSchema),
      z.lazy(() => ImageUncheckedCreateWithoutArtworkInputObjectSchema),
    ]),
  })
  .strict();

export const ImageCreateOrConnectWithoutArtworkInputObjectSchema = Schema;
