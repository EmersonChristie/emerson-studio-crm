import { z } from 'zod';
import { InquiryWhereUniqueInputObjectSchema } from './InquiryWhereUniqueInput.schema';
import { InquiryUpdateWithoutArtworkInputObjectSchema } from './InquiryUpdateWithoutArtworkInput.schema';
import { InquiryUncheckedUpdateWithoutArtworkInputObjectSchema } from './InquiryUncheckedUpdateWithoutArtworkInput.schema';
import { InquiryCreateWithoutArtworkInputObjectSchema } from './InquiryCreateWithoutArtworkInput.schema';
import { InquiryUncheckedCreateWithoutArtworkInputObjectSchema } from './InquiryUncheckedCreateWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUpsertWithWhereUniqueWithoutArtworkInput> = z
  .object({
    where: z.lazy(() => InquiryWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => InquiryUpdateWithoutArtworkInputObjectSchema),
      z.lazy(() => InquiryUncheckedUpdateWithoutArtworkInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => InquiryCreateWithoutArtworkInputObjectSchema),
      z.lazy(() => InquiryUncheckedCreateWithoutArtworkInputObjectSchema),
    ]),
  })
  .strict();

export const InquiryUpsertWithWhereUniqueWithoutArtworkInputObjectSchema = Schema;
