import { z } from 'zod';
import { InquiryCreateWithoutArtworkInputObjectSchema } from './InquiryCreateWithoutArtworkInput.schema';
import { InquiryUncheckedCreateWithoutArtworkInputObjectSchema } from './InquiryUncheckedCreateWithoutArtworkInput.schema';
import { InquiryCreateOrConnectWithoutArtworkInputObjectSchema } from './InquiryCreateOrConnectWithoutArtworkInput.schema';
import { InquiryUpsertWithWhereUniqueWithoutArtworkInputObjectSchema } from './InquiryUpsertWithWhereUniqueWithoutArtworkInput.schema';
import { InquiryCreateManyArtworkInputEnvelopeObjectSchema } from './InquiryCreateManyArtworkInputEnvelope.schema';
import { InquiryWhereUniqueInputObjectSchema } from './InquiryWhereUniqueInput.schema';
import { InquiryUpdateWithWhereUniqueWithoutArtworkInputObjectSchema } from './InquiryUpdateWithWhereUniqueWithoutArtworkInput.schema';
import { InquiryUpdateManyWithWhereWithoutArtworkInputObjectSchema } from './InquiryUpdateManyWithWhereWithoutArtworkInput.schema';
import { InquiryScalarWhereInputObjectSchema } from './InquiryScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUpdateManyWithoutArtworkNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => InquiryCreateWithoutArtworkInputObjectSchema),
        z.lazy(() => InquiryCreateWithoutArtworkInputObjectSchema).array(),
        z.lazy(() => InquiryUncheckedCreateWithoutArtworkInputObjectSchema),
        z.lazy(() => InquiryUncheckedCreateWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => InquiryCreateOrConnectWithoutArtworkInputObjectSchema),
        z.lazy(() => InquiryCreateOrConnectWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => InquiryUpsertWithWhereUniqueWithoutArtworkInputObjectSchema),
        z.lazy(() => InquiryUpsertWithWhereUniqueWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => InquiryCreateManyArtworkInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => InquiryWhereUniqueInputObjectSchema),
        z.lazy(() => InquiryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => InquiryWhereUniqueInputObjectSchema),
        z.lazy(() => InquiryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => InquiryWhereUniqueInputObjectSchema),
        z.lazy(() => InquiryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => InquiryWhereUniqueInputObjectSchema),
        z.lazy(() => InquiryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => InquiryUpdateWithWhereUniqueWithoutArtworkInputObjectSchema),
        z.lazy(() => InquiryUpdateWithWhereUniqueWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => InquiryUpdateManyWithWhereWithoutArtworkInputObjectSchema),
        z.lazy(() => InquiryUpdateManyWithWhereWithoutArtworkInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => InquiryScalarWhereInputObjectSchema),
        z.lazy(() => InquiryScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const InquiryUpdateManyWithoutArtworkNestedInputObjectSchema = Schema;
