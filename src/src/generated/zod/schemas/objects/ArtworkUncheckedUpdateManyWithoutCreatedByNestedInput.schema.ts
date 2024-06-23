import { z } from 'zod';
import { ArtworkCreateWithoutCreatedByInputObjectSchema } from './ArtworkCreateWithoutCreatedByInput.schema';
import { ArtworkUncheckedCreateWithoutCreatedByInputObjectSchema } from './ArtworkUncheckedCreateWithoutCreatedByInput.schema';
import { ArtworkCreateOrConnectWithoutCreatedByInputObjectSchema } from './ArtworkCreateOrConnectWithoutCreatedByInput.schema';
import { ArtworkUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ArtworkUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { ArtworkCreateManyCreatedByInputEnvelopeObjectSchema } from './ArtworkCreateManyCreatedByInputEnvelope.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ArtworkUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { ArtworkUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './ArtworkUpdateManyWithWhereWithoutCreatedByInput.schema';
import { ArtworkScalarWhereInputObjectSchema } from './ArtworkScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUncheckedUpdateManyWithoutCreatedByNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => ArtworkUncheckedCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkCreateOrConnectWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ArtworkUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => ArtworkCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema),
        z.lazy(() => ArtworkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ArtworkUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ArtworkUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
        z.lazy(() => ArtworkUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ArtworkScalarWhereInputObjectSchema),
        z.lazy(() => ArtworkScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtworkUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema = Schema;
