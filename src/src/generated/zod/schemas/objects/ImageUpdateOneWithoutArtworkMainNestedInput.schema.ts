import { z } from 'zod';
import { ImageCreateWithoutArtworkMainInputObjectSchema } from './ImageCreateWithoutArtworkMainInput.schema';
import { ImageUncheckedCreateWithoutArtworkMainInputObjectSchema } from './ImageUncheckedCreateWithoutArtworkMainInput.schema';
import { ImageCreateOrConnectWithoutArtworkMainInputObjectSchema } from './ImageCreateOrConnectWithoutArtworkMainInput.schema';
import { ImageUpsertWithoutArtworkMainInputObjectSchema } from './ImageUpsertWithoutArtworkMainInput.schema';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutArtworkMainInputObjectSchema } from './ImageUpdateWithoutArtworkMainInput.schema';
import { ImageUncheckedUpdateWithoutArtworkMainInputObjectSchema } from './ImageUncheckedUpdateWithoutArtworkMainInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUpdateOneWithoutArtworkMainNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ImageCreateWithoutArtworkMainInputObjectSchema),
        z.lazy(() => ImageUncheckedCreateWithoutArtworkMainInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => ImageCreateOrConnectWithoutArtworkMainInputObjectSchema).optional(),
    upsert: z.lazy(() => ImageUpsertWithoutArtworkMainInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ImageWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ImageUpdateWithoutArtworkMainInputObjectSchema),
        z.lazy(() => ImageUncheckedUpdateWithoutArtworkMainInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ImageUpdateOneWithoutArtworkMainNestedInputObjectSchema = Schema;
