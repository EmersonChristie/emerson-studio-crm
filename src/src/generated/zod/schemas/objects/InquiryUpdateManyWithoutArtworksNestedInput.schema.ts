import { z } from 'zod';
import { InquiryCreateWithoutArtworksInputObjectSchema } from './InquiryCreateWithoutArtworksInput.schema';
import { InquiryUncheckedCreateWithoutArtworksInputObjectSchema } from './InquiryUncheckedCreateWithoutArtworksInput.schema';
import { InquiryCreateOrConnectWithoutArtworksInputObjectSchema } from './InquiryCreateOrConnectWithoutArtworksInput.schema';
import { InquiryUpsertWithWhereUniqueWithoutArtworksInputObjectSchema } from './InquiryUpsertWithWhereUniqueWithoutArtworksInput.schema';
import { InquiryWhereUniqueInputObjectSchema } from './InquiryWhereUniqueInput.schema';
import { InquiryUpdateWithWhereUniqueWithoutArtworksInputObjectSchema } from './InquiryUpdateWithWhereUniqueWithoutArtworksInput.schema';
import { InquiryUpdateManyWithWhereWithoutArtworksInputObjectSchema } from './InquiryUpdateManyWithWhereWithoutArtworksInput.schema';
import { InquiryScalarWhereInputObjectSchema } from './InquiryScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUpdateManyWithoutArtworksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => InquiryCreateWithoutArtworksInputObjectSchema),
        z.lazy(() => InquiryCreateWithoutArtworksInputObjectSchema).array(),
        z.lazy(() => InquiryUncheckedCreateWithoutArtworksInputObjectSchema),
        z.lazy(() => InquiryUncheckedCreateWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => InquiryCreateOrConnectWithoutArtworksInputObjectSchema),
        z.lazy(() => InquiryCreateOrConnectWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => InquiryUpsertWithWhereUniqueWithoutArtworksInputObjectSchema),
        z.lazy(() => InquiryUpsertWithWhereUniqueWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
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
        z.lazy(() => InquiryUpdateWithWhereUniqueWithoutArtworksInputObjectSchema),
        z.lazy(() => InquiryUpdateWithWhereUniqueWithoutArtworksInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => InquiryUpdateManyWithWhereWithoutArtworksInputObjectSchema),
        z.lazy(() => InquiryUpdateManyWithWhereWithoutArtworksInputObjectSchema).array(),
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

export const InquiryUpdateManyWithoutArtworksNestedInputObjectSchema = Schema;
