import { z } from 'zod';
import { ArtworkCreateWithoutInquiriesInputObjectSchema } from './ArtworkCreateWithoutInquiriesInput.schema';
import { ArtworkUncheckedCreateWithoutInquiriesInputObjectSchema } from './ArtworkUncheckedCreateWithoutInquiriesInput.schema';
import { ArtworkCreateOrConnectWithoutInquiriesInputObjectSchema } from './ArtworkCreateOrConnectWithoutInquiriesInput.schema';
import { ArtworkUpsertWithWhereUniqueWithoutInquiriesInputObjectSchema } from './ArtworkUpsertWithWhereUniqueWithoutInquiriesInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './ArtworkWhereUniqueInput.schema';
import { ArtworkUpdateWithWhereUniqueWithoutInquiriesInputObjectSchema } from './ArtworkUpdateWithWhereUniqueWithoutInquiriesInput.schema';
import { ArtworkUpdateManyWithWhereWithoutInquiriesInputObjectSchema } from './ArtworkUpdateManyWithWhereWithoutInquiriesInput.schema';
import { ArtworkScalarWhereInputObjectSchema } from './ArtworkScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkUncheckedUpdateManyWithoutInquiriesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtworkCreateWithoutInquiriesInputObjectSchema),
        z.lazy(() => ArtworkCreateWithoutInquiriesInputObjectSchema).array(),
        z.lazy(() => ArtworkUncheckedCreateWithoutInquiriesInputObjectSchema),
        z.lazy(() => ArtworkUncheckedCreateWithoutInquiriesInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtworkCreateOrConnectWithoutInquiriesInputObjectSchema),
        z.lazy(() => ArtworkCreateOrConnectWithoutInquiriesInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ArtworkUpsertWithWhereUniqueWithoutInquiriesInputObjectSchema),
        z.lazy(() => ArtworkUpsertWithWhereUniqueWithoutInquiriesInputObjectSchema).array(),
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
        z.lazy(() => ArtworkUpdateWithWhereUniqueWithoutInquiriesInputObjectSchema),
        z.lazy(() => ArtworkUpdateWithWhereUniqueWithoutInquiriesInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ArtworkUpdateManyWithWhereWithoutInquiriesInputObjectSchema),
        z.lazy(() => ArtworkUpdateManyWithWhereWithoutInquiriesInputObjectSchema).array(),
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

export const ArtworkUncheckedUpdateManyWithoutInquiriesNestedInputObjectSchema = Schema;
