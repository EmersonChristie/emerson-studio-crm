import { z } from 'zod';
import { InquiryWhereUniqueInputObjectSchema } from './InquiryWhereUniqueInput.schema';
import { InquiryUpdateWithoutContactInputObjectSchema } from './InquiryUpdateWithoutContactInput.schema';
import { InquiryUncheckedUpdateWithoutContactInputObjectSchema } from './InquiryUncheckedUpdateWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUpdateWithWhereUniqueWithoutContactInput> = z
  .object({
    where: z.lazy(() => InquiryWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => InquiryUpdateWithoutContactInputObjectSchema),
      z.lazy(() => InquiryUncheckedUpdateWithoutContactInputObjectSchema),
    ]),
  })
  .strict();

export const InquiryUpdateWithWhereUniqueWithoutContactInputObjectSchema = Schema;
