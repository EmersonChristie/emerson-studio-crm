import { z } from 'zod';
import { InquiryCreateManyInputObjectSchema } from './objects/InquiryCreateManyInput.schema';

export const InquiryCreateManySchema = z.object({
  data: z.union([InquiryCreateManyInputObjectSchema, z.array(InquiryCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
});
