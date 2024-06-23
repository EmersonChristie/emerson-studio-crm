import { z } from 'zod';
import { InquiryScalarWhereInputObjectSchema } from './InquiryScalarWhereInput.schema';
import { InquiryUpdateManyMutationInputObjectSchema } from './InquiryUpdateManyMutationInput.schema';
import { InquiryUncheckedUpdateManyWithoutInquiriesInputObjectSchema } from './InquiryUncheckedUpdateManyWithoutInquiriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUpdateManyWithWhereWithoutContactInput> = z
  .object({
    where: z.lazy(() => InquiryScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => InquiryUpdateManyMutationInputObjectSchema),
      z.lazy(() => InquiryUncheckedUpdateManyWithoutInquiriesInputObjectSchema),
    ]),
  })
  .strict();

export const InquiryUpdateManyWithWhereWithoutContactInputObjectSchema = Schema;
