import { z } from 'zod';
import { ArtworkPrivateViewCreateWithoutContactsInputObjectSchema } from './ArtworkPrivateViewCreateWithoutContactsInput.schema';
import { ArtworkPrivateViewUncheckedCreateWithoutContactsInputObjectSchema } from './ArtworkPrivateViewUncheckedCreateWithoutContactsInput.schema';
import { ArtworkPrivateViewCreateOrConnectWithoutContactsInputObjectSchema } from './ArtworkPrivateViewCreateOrConnectWithoutContactsInput.schema';
import { ArtworkPrivateViewUpsertWithWhereUniqueWithoutContactsInputObjectSchema } from './ArtworkPrivateViewUpsertWithWhereUniqueWithoutContactsInput.schema';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './ArtworkPrivateViewWhereUniqueInput.schema';
import { ArtworkPrivateViewUpdateWithWhereUniqueWithoutContactsInputObjectSchema } from './ArtworkPrivateViewUpdateWithWhereUniqueWithoutContactsInput.schema';
import { ArtworkPrivateViewUpdateManyWithWhereWithoutContactsInputObjectSchema } from './ArtworkPrivateViewUpdateManyWithWhereWithoutContactsInput.schema';
import { ArtworkPrivateViewScalarWhereInputObjectSchema } from './ArtworkPrivateViewScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUpdateManyWithoutContactsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkPrivateViewCreateWithoutContactsInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewCreateWithoutContactsInputObjectSchema).array(),
        z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutContactsInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewUncheckedCreateWithoutContactsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkPrivateViewCreateOrConnectWithoutContactsInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewCreateOrConnectWithoutContactsInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ArtworkPrivateViewUpsertWithWhereUniqueWithoutContactsInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewUpsertWithWhereUniqueWithoutContactsInputObjectSchema).array(),
      ])
      .optional(),
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
        z.lazy(() => ArtworkPrivateViewUpdateWithWhereUniqueWithoutContactsInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewUpdateWithWhereUniqueWithoutContactsInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ArtworkPrivateViewUpdateManyWithWhereWithoutContactsInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewUpdateManyWithWhereWithoutContactsInputObjectSchema).array(),
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

export const ArtworkPrivateViewUpdateManyWithoutContactsNestedInputObjectSchema = Schema;
