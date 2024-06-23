import { z } from 'zod';
import { ArtworkCreateWithoutPrivateViewsInputObjectSchema } from './ArtworkCreateWithoutPrivateViewsInput.schema';
import { ArtworkUncheckedCreateWithoutPrivateViewsInputObjectSchema } from './ArtworkUncheckedCreateWithoutPrivateViewsInput.schema';
import { ArtworkCreateOrConnectWithoutPrivateViewsInputObjectSchema } from './ArtworkCreateOrConnectWithoutPrivateViewsInput.schema';
import { ArtworkUpsertWithWhereUniqueWithoutPrivateViewsInputObjectSchema } from './ArtworkUpsertWithWhereUniqueWithoutPrivateViewsInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithWhereUniqueWithoutPrivateViewsInputObjectSchema } from './ArtworkUpdateWithWhereUniqueWithoutPrivateViewsInput.schema';
import { ArtworkUpdateManyWithWhereWithoutPrivateViewsInputObjectSchema } from './ArtworkUpdateManyWithWhereWithoutPrivateViewsInput.schema';
import { ArtworkScalarWhereInputObjectSchema } from './ArtworkScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUncheckedUpdateManyWithoutPrivateViewsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => ArtworkCreateWithoutPrivateViewsInputObjectSchema).array(),
        z.lazy(() => ArtworkUncheckedCreateWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutPrivateViewsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkCreateOrConnectWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => ArtworkCreateOrConnectWithoutPrivateViewsInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ArtworkUpsertWithWhereUniqueWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => ArtworkUpsertWithWhereUniqueWithoutPrivateViewsInputObjectSchema).array(),
      ])
      .optional(),
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
        z.lazy(() => ArtworkUpdateWithWhereUniqueWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => ArtworkUpdateWithWhereUniqueWithoutPrivateViewsInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ArtworkUpdateManyWithWhereWithoutPrivateViewsInputObjectSchema),
        z.lazy(() => ArtworkUpdateManyWithWhereWithoutPrivateViewsInputObjectSchema).array(),
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

export const ArtworkUncheckedUpdateManyWithoutPrivateViewsNestedInputObjectSchema = Schema;
