import { z } from 'zod';
import { InquiryWhereUniqueInputObjectSchema } from './InquiryWhereUniqueInput.schema';
import { InquiryCreateWithoutContactInputObjectSchema } from './InquiryCreateWithoutContactInput.schema';
import { InquiryUncheckedCreateWithoutContactInputObjectSchema } from './InquiryUncheckedCreateWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryCreateOrConnectWithoutContactInput> = z
  .object({
    where: z.lazy(() => InquiryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InquiryCreateWithoutContactInputObjectSchema),
      z.lazy(() => InquiryUncheckedCreateWithoutContactInputObjectSchema),
    ]),
  })
  .strict();

export const InquiryCreateOrConnectWithoutContactInputObjectSchema = Schema;
