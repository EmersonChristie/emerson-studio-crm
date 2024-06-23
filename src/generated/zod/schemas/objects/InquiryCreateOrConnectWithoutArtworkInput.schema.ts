import { z } from 'zod';
import { InquiryWhereUniqueInputObjectSchema } from './InquiryWhereUniqueInput.schema';
import { InquiryCreateWithoutArtworkInputObjectSchema } from './InquiryCreateWithoutArtworkInput.schema';
import { InquiryUncheckedCreateWithoutArtworkInputObjectSchema } from './InquiryUncheckedCreateWithoutArtworkInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryCreateOrConnectWithoutArtworkInput> = z
  .object({
    where: z.lazy(() => InquiryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InquiryCreateWithoutArtworkInputObjectSchema),
      z.lazy(() => InquiryUncheckedCreateWithoutArtworkInputObjectSchema),
    ]),
  })
  .strict();

export const InquiryCreateOrConnectWithoutArtworkInputObjectSchema = Schema;
