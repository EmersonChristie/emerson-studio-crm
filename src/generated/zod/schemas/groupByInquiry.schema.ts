import { z } from 'zod';
import { InquiryWhereInputObjectSchema } from './objects/InquiryWhereInput.schema';
import { InquiryOrderByWithAggregationInputObjectSchema } from './objects/InquiryOrderByWithAggregationInput.schema';
import { InquiryScalarWhereWithAggregatesInputObjectSchema } from './objects/InquiryScalarWhereWithAggregatesInput.schema';
import { InquiryScalarFieldEnumSchema } from './enums/InquiryScalarFieldEnum.schema';

export const InquiryGroupBySchema = z.object({
  where: InquiryWhereInputObjectSchema.optional(),
  orderBy: z
    .union([InquiryOrderByWithAggregationInputObjectSchema, InquiryOrderByWithAggregationInputObjectSchema.array()])
    .optional(),
  having: InquiryScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(InquiryScalarFieldEnumSchema),
});
