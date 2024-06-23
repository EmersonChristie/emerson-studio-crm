import { z } from 'zod';
import { ImageCreateWithoutArtworkInputObjectSchema } from './ImageCreateWithoutArtworkInput.schema';
import { ImageUncheckedCreateWithoutArtworkInputObjectSchema } from './ImageUncheckedCreateWithoutArtworkInput.schema';
import { ImageCreateOrConnectWithoutArtworkInputObjectSchema } from './ImageCreateOrConnectWithoutArtworkInput.schema';
import { ImageUpsertWithWhereUniqueWithoutArtworkInputObjectSchema } from './ImageUpsertWithWhereUniqueWithoutArtworkInput.schema';
import { ImageCreateManyArtworkInputEnvelopeObjectSchema } from './ImageCreateManyArtworkInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithWhereUniqueWithoutArtworkInputObjectSchema } from './ImageUpdateWithWhereUniqueWithoutArtworkInput.schema';
import { ImageUpdateManyWithWhereWithoutArtworkInputObjectSchema } from './ImageUpdateManyWithWhereWithoutArtworkInput.schema';
import { ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUncheckedUpdateManyWithoutArtworkNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ImageCreateWithoutArtworkInputObjectSchema),
        z.lazy(() => ImageCreateWithoutArtworkInputObjectSchema).array(),
        z.lazy(() => ImageUncheckedCreateWithoutArtworkInputObjectSchema),
        z.lazy(() => ImageUncheckedCreateWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ImageCreateOrConnectWithoutArtworkInputObjectSchema),
        z.lazy(() => ImageCreateOrConnectWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ImageUpsertWithWhereUniqueWithoutArtworkInputObjectSchema),
        z.lazy(() => ImageUpsertWithWhereUniqueWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => ImageCreateManyArtworkInputEnvelopeObjectSchema).optional(),
    set: z
      .union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()])
      .optional(),
    disconnect: z
      .union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()])
      .optional(),
    delete: z
      .union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()])
      .optional(),
    connect: z
      .union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()])
      .optional(),
    update: z
      .union([
        z.lazy(() => ImageUpdateWithWhereUniqueWithoutArtworkInputObjectSchema),
        z.lazy(() => ImageUpdateWithWhereUniqueWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ImageUpdateManyWithWhereWithoutArtworkInputObjectSchema),
        z.lazy(() => ImageUpdateManyWithWhereWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => ImageScalarWhereInputObjectSchema), z.lazy(() => ImageScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict();

export const ImageUncheckedUpdateManyWithoutArtworkNestedInputObjectSchema = Schema;
