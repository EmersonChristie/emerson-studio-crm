import { z } from 'zod';
import { InquiryUpdateManyMutationInputObjectSchema } from './objects/InquiryUpdateManyMutationInput.schema';
import { InquiryWhereInputObjectSchema } from './objects/InquiryWhereInput.schema';

export const InquiryUpdateManySchema = z.object({
  data: InquiryUpdateManyMutationInputObjectSchema,
  where: InquiryWhereInputObjectSchema.optional(),
});
