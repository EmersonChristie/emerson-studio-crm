import { z } from 'zod';
import { InquiryUpdateInputObjectSchema } from './objects/InquiryUpdateInput.schema';
import { InquiryUncheckedUpdateInputObjectSchema } from './objects/InquiryUncheckedUpdateInput.schema';
import { InquiryWhereUniqueInputObjectSchema } from './objects/InquiryWhereUniqueInput.schema';

export const InquiryUpdateOneSchema = z.object({
  data: z.union([InquiryUpdateInputObjectSchema, InquiryUncheckedUpdateInputObjectSchema]),
  where: InquiryWhereUniqueInputObjectSchema,
});
