import { z } from 'zod';
import { ArtworkCreateWithoutCategoriesInputObjectSchema } from './ArtworkCreateWithoutCategoriesInput.schema';
import { ArtworkUncheckedCreateWithoutCategoriesInputObjectSchema } from './ArtworkUncheckedCreateWithoutCategoriesInput.schema';
import { ArtworkCreateOrConnectWithoutCategoriesInputObjectSchema } from './ArtworkCreateOrConnectWithoutCategoriesInput.schema';
import { ArtworkUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema } from './ArtworkUpsertWithWhereUniqueWithoutCategoriesInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema } from './ArtworkUpdateWithWhereUniqueWithoutCategoriesInput.schema';
import { ArtworkUpdateManyWithWhereWithoutCategoriesInputObjectSchema } from './ArtworkUpdateManyWithWhereWithoutCategoriesInput.schema';
import { ArtworkScalarWhereInputObjectSchema } from './ArtworkScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUncheckedUpdateManyWithoutCategoriesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutCategoriesInputObjectSchema),
        z.lazy(() => ArtworkCreateWithoutCategoriesInputObjectSchema).array(),
        z.lazy(() => ArtworkUncheckedCreateWithoutCategoriesInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutCategoriesInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkCreateOrConnectWithoutCategoriesInputObjectSchema),
        z.lazy(() => ArtworkCreateOrConnectWithoutCategoriesInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ArtworkUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema),
        z.lazy(() => ArtworkUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema).array(),
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
        z.lazy(() => ArtworkUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema),
        z.lazy(() => ArtworkUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ArtworkUpdateManyWithWhereWithoutCategoriesInputObjectSchema),
        z.lazy(() => ArtworkUpdateManyWithWhereWithoutCategoriesInputObjectSchema).array(),
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

export const ArtworkUncheckedUpdateManyWithoutCategoriesNestedInputObjectSchema = Schema;
