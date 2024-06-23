import { z } from 'zod';
import { ArtworkCreateWithoutListsInputObjectSchema } from './ArtworkCreateWithoutListsInput.schema';
import { ArtworkUncheckedCreateWithoutListsInputObjectSchema } from './ArtworkUncheckedCreateWithoutListsInput.schema';
import { ArtworkCreateOrConnectWithoutListsInputObjectSchema } from './ArtworkCreateOrConnectWithoutListsInput.schema';
import { ArtworkUpsertWithWhereUniqueWithoutListsInputObjectSchema } from './ArtworkUpsertWithWhereUniqueWithoutListsInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithWhereUniqueWithoutListsInputObjectSchema } from './ArtworkUpdateWithWhereUniqueWithoutListsInput.schema';
import { ArtworkUpdateManyWithWhereWithoutListsInputObjectSchema } from './ArtworkUpdateManyWithWhereWithoutListsInput.schema';
import { ArtworkScalarWhereInputObjectSchema } from './ArtworkScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUncheckedUpdateManyWithoutListsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutListsInputObjectSchema),
        z.lazy(() => ArtworkCreateWithoutListsInputObjectSchema).array(),
        z.lazy(() => ArtworkUncheckedCreateWithoutListsInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutListsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkCreateOrConnectWithoutListsInputObjectSchema),
        z.lazy(() => ArtworkCreateOrConnectWithoutListsInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ArtworkUpsertWithWhereUniqueWithoutListsInputObjectSchema),
        z.lazy(() => ArtworkUpsertWithWhereUniqueWithoutListsInputObjectSchema).array(),
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
        z.lazy(() => ArtworkUpdateWithWhereUniqueWithoutListsInputObjectSchema),
        z.lazy(() => ArtworkUpdateWithWhereUniqueWithoutListsInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ArtworkUpdateManyWithWhereWithoutListsInputObjectSchema),
        z.lazy(() => ArtworkUpdateManyWithWhereWithoutListsInputObjectSchema).array(),
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

export const ArtworkUncheckedUpdateManyWithoutListsNestedInputObjectSchema = Schema;
