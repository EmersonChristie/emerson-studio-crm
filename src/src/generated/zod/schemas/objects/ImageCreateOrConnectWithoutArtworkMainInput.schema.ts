import { z } from 'zod';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageCreateWithoutArtworkMainInputObjectSchema } from './ImageCreateWithoutArtworkMainInput.schema';
import { ImageUncheckedCreateWithoutArtworkMainInputObjectSchema } from './ImageUncheckedCreateWithoutArtworkMainInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCreateOrConnectWithoutArtworkMainInput> = z
  .object({
    where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ImageCreateWithoutArtworkMainInputObjectSchema),
      z.lazy(() => ImageUncheckedCreateWithoutArtworkMainInputObjectSchema),
    ]),
  })
  .strict();

export const ImageCreateOrConnectWithoutArtworkMainInputObjectSchema = Schema;
