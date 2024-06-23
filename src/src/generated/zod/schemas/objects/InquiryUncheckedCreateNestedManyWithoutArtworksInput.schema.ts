import { z } from 'zod';
import { InquiryCreateWithoutArtworksInputObjectSchema } from './InquiryCreateWithoutArtworksInput.schema';
import { InquiryUncheckedCreateWithoutArtworksInputObjectSchema } from './InquiryUncheckedCreateWithoutArtworksInput.schema';
import { InquiryCreateOrConnectWithoutArtworksInputObjectSchema } from './InquiryCreateOrConnectWithoutArtworksInput.schema';
import { InquiryWhereUniqueInputObjectSchema } from './InquiryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUncheckedCreateNestedManyWithoutArtworksInput> = z
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
    connect: z
      .union([
        z.lazy(() => InquiryWhereUniqueInputObjectSchema),
        z.lazy(() => InquiryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const InquiryUncheckedCreateNestedManyWithoutArtworksInputObjectSchema = Schema;
