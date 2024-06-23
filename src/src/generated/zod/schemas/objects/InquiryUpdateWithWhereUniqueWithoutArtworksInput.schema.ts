import { z } from 'zod';
import { InquiryWhereUniqueInputObjectSchema } from './InquiryWhereUniqueInput.schema';
import { InquiryUpdateWithoutArtworksInputObjectSchema } from './InquiryUpdateWithoutArtworksInput.schema';
import { InquiryUncheckedUpdateWithoutArtworksInputObjectSchema } from './InquiryUncheckedUpdateWithoutArtworksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUpdateWithWhereUniqueWithoutArtworksInput> = z
  .object({
    where: z.lazy(() => InquiryWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => InquiryUpdateWithoutArtworksInputObjectSchema),
      z.lazy(() => InquiryUncheckedUpdateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict();

export const InquiryUpdateWithWhereUniqueWithoutArtworksInputObjectSchema = Schema;
