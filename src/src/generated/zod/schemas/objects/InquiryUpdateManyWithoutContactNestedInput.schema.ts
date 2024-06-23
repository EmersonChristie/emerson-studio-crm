import { z } from 'zod';
import { InquiryCreateWithoutContactInputObjectSchema } from './InquiryCreateWithoutContactInput.schema';
import { InquiryUncheckedCreateWithoutContactInputObjectSchema } from './InquiryUncheckedCreateWithoutContactInput.schema';
import { InquiryCreateOrConnectWithoutContactInputObjectSchema } from './InquiryCreateOrConnectWithoutContactInput.schema';
import { InquiryUpsertWithWhereUniqueWithoutContactInputObjectSchema } from './InquiryUpsertWithWhereUniqueWithoutContactInput.schema';
import { InquiryCreateManyContactInputEnvelopeObjectSchema } from './InquiryCreateManyContactInputEnvelope.schema';
import { InquiryWhereUniqueInputObjectSchema } from './InquiryWhereUniqueInput.schema';
import { InquiryUpdateWithWhereUniqueWithoutContactInputObjectSchema } from './InquiryUpdateWithWhereUniqueWithoutContactInput.schema';
import { InquiryUpdateManyWithWhereWithoutContactInputObjectSchema } from './InquiryUpdateManyWithWhereWithoutContactInput.schema';
import { InquiryScalarWhereInputObjectSchema } from './InquiryScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUpdateManyWithoutContactNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => InquiryCreateWithoutContactInputObjectSchema),
        z.lazy(() => InquiryCreateWithoutContactInputObjectSchema).array(),
        z.lazy(() => InquiryUncheckedCreateWithoutContactInputObjectSchema),
        z.lazy(() => InquiryUncheckedCreateWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => InquiryCreateOrConnectWithoutContactInputObjectSchema),
        z.lazy(() => InquiryCreateOrConnectWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => InquiryUpsertWithWhereUniqueWithoutContactInputObjectSchema),
        z.lazy(() => InquiryUpsertWithWhereUniqueWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => InquiryCreateManyContactInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => InquiryUpdateWithWhereUniqueWithoutContactInputObjectSchema),
        z.lazy(() => InquiryUpdateWithWhereUniqueWithoutContactInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => InquiryUpdateManyWithWhereWithoutContactInputObjectSchema),
        z.lazy(() => InquiryUpdateManyWithWhereWithoutContactInputObjectSchema).array(),
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

export const InquiryUpdateManyWithoutContactNestedInputObjectSchema = Schema;
