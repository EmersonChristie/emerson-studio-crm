import { z } from 'zod';
import { InquiryWhereUniqueInputObjectSchema } from './InquiryWhereUniqueInput.schema';
import { InquiryUpdateWithoutArtworksInputObjectSchema } from './InquiryUpdateWithoutArtworksInput.schema';
import { InquiryUncheckedUpdateWithoutArtworksInputObjectSchema } from './InquiryUncheckedUpdateWithoutArtworksInput.schema';
import { InquiryCreateWithoutArtworksInputObjectSchema } from './InquiryCreateWithoutArtworksInput.schema';
import { InquiryUncheckedCreateWithoutArtworksInputObjectSchema } from './InquiryUncheckedCreateWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUpsertWithWhereUniqueWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => InquiryWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => InquiryUpdateWithoutArtworksInputObjectSchema),
      z.lazy(() => InquiryUncheckedUpdateWithoutArtworksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => InquiryCreateWithoutArtworksInputObjectSchema),
      z.lazy(() => InquiryUncheckedCreateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict();

export const InquiryUpsertWithWhereUniqueWithoutArtworksInputObjectSchema = Schema;
