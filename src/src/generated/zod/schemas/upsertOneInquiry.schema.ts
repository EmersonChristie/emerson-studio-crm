import { z } from 'zod';
import { InquiryWhereUniqueInputObjectSchema } from './objects/InquiryWhereUniqueInput.schema';
import { InquiryCreateInputObjectSchema } from './objects/InquiryCreateInput.schema';
import { InquiryUncheckedCreateInputObjectSchema } from './objects/InquiryUncheckedCreateInput.schema';
import { InquiryUpdateInputObjectSchema } from './objects/InquiryUpdateInput.schema';
import { InquiryUncheckedUpdateInputObjectSchema } from './objects/InquiryUncheckedUpdateInput.schema';

export const InquiryUpsertSchema = z.object({
  where: InquiryWhereUniqueInputObjectSchema,
  create: z.union([InquiryCreateInputObjectSchema, InquiryUncheckedCreateInputObjectSchema]),
  update: z.union([InquiryUpdateInputObjectSchema, InquiryUncheckedUpdateInputObjectSchema]),
});
