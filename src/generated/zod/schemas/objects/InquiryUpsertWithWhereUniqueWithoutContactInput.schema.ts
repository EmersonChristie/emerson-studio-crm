import { z } from 'zod';
import { InquiryWhereUniqueInputObjectSchema } from './InquiryWhereUniqueInput.schema';
import { InquiryUpdateWithoutContactInputObjectSchema } from './InquiryUpdateWithoutContactInput.schema';
import { InquiryUncheckedUpdateWithoutContactInputObjectSchema } from './InquiryUncheckedUpdateWithoutContactInput.schema';
import { InquiryCreateWithoutContactInputObjectSchema } from './InquiryCreateWithoutContactInput.schema';
import { InquiryUncheckedCreateWithoutContactInputObjectSchema } from './InquiryUncheckedCreateWithoutContactInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUpsertWithWhereUniqueWithoutContactInput> = z
  .object({
    where: z.lazy(() => InquiryWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => InquiryUpdateWithoutContactInputObjectSchema),
      z.lazy(() => InquiryUncheckedUpdateWithoutContactInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => InquiryCreateWithoutContactInputObjectSchema),
      z.lazy(() => InquiryUncheckedCreateWithoutContactInputObjectSchema),
    ]),
  })
  .strict();

export const InquiryUpsertWithWhereUniqueWithoutContactInputObjectSchema = Schema;
