import { z } from 'zod';
import { ImageCreateWithoutArtworkMainInputObjectSchema } from './ImageCreateWithoutArtworkMainInput.schema';
import { ImageUncheckedCreateWithoutArtworkMainInputObjectSchema } from './ImageUncheckedCreateWithoutArtworkMainInput.schema';
import { ImageCreateOrConnectWithoutArtworkMainInputObjectSchema } from './ImageCreateOrConnectWithoutArtworkMainInput.schema';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCreateNestedOneWithoutArtworkMainInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ImageCreateWithoutArtworkMainInputObjectSchema),
        z.lazy(() => ImageUncheckedCreateWithoutArtworkMainInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ImageCreateOrConnectWithoutArtworkMainInputObjectSchema).optional(),
    connect: z.lazy(() => ImageWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ImageCreateNestedOneWithoutArtworkMainInputObjectSchema = Schema;
