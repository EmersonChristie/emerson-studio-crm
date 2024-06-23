import { z } from 'zod';
import { ArtworkPrivateViewCreateWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewCreateWithoutCreatedByInput.schema';
import { ArtworkPrivateViewUncheckedCreateWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewUncheckedCreateWithoutCreatedByInput.schema';
import { ArtworkPrivateViewCreateOrConnectWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewCreateOrConnectWithoutCreatedByInput.schema';
import { ArtworkPrivateViewUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { ArtworkPrivateViewCreateManyCreatedByInputEnvelopeObjectSchema } from './ArtworkPrivateViewCreateManyCreatedByInputEnvelope.schema';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './ArtworkPrivateViewWhereUniqueInput.schema';
import { ArtworkPrivateViewUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { ArtworkPrivateViewUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './ArtworkPrivateViewUpdateManyWithWhereWithoutCreatedByInput.schema';
import { ArtworkPrivateViewScalarWhereInputObjectSchema } from './ArtworkPrivateViewScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUpdateManyWithoutCreatedByNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkPrivateViewCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkPrivateViewCreateOrConnectWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ArtworkPrivateViewUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => ArtworkPrivateViewCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ArtworkPrivateViewUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ArtworkPrivateViewUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ArtworkPrivateViewScalarWhereInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkPrivateViewUpdateManyWithoutCreatedByNestedInputObjectSchema = Schema;
