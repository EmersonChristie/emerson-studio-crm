import { z } from 'zod';
import { InquiryWhereUniqueInputObjectSchema } from './InquiryWhereUniqueInput.schema';
import { InquiryCreateWithoutArtworksInputObjectSchema } from './InquiryCreateWithoutArtworksInput.schema';
import { InquiryUncheckedCreateWithoutArtworksInputObjectSchema } from './InquiryUncheckedCreateWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryCreateOrConnectWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => InquiryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InquiryCreateWithoutArtworksInputObjectSchema),
      z.lazy(() => InquiryUncheckedCreateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict();

export const InquiryCreateOrConnectWithoutArtworksInputObjectSchema = Schema;
