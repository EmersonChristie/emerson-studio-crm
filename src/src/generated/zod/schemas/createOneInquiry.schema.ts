import { z } from 'zod';
import { InquiryCreateInputObjectSchema } from './objects/InquiryCreateInput.schema';
import { InquiryUncheckedCreateInputObjectSchema } from './objects/InquiryUncheckedCreateInput.schema';

export const InquiryCreateOneSchema = z.object({
  data: z.union([InquiryCreateInputObjectSchema, InquiryUncheckedCreateInputObjectSchema]),
});
