import { z } from 'zod';
import { InquiryWhereUniqueInputObjectSchema } from './InquiryWhereUniqueInput.schema';
import { InquiryUpdateWithoutArtworkInputObjectSchema } from './InquiryUpdateWithoutArtworkInput.schema';
import { InquiryUncheckedUpdateWithoutArtworkInputObjectSchema } from './InquiryUncheckedUpdateWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUpdateWithWhereUniqueWithoutArtworkInput> = z
  .object({
    where: z.lazy(() => InquiryWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => InquiryUpdateWithoutArtworkInputObjectSchema),
      z.lazy(() => InquiryUncheckedUpdateWithoutArtworkInputObjectSchema),
    ]),
  })
  .strict();

export const InquiryUpdateWithWhereUniqueWithoutArtworkInputObjectSchema = Schema;
