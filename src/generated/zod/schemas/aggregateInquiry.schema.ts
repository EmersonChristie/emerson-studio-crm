import { z } from 'zod';
import { InquiryOrderByWithRelationInputObjectSchema } from './objects/InquiryOrderByWithRelationInput.schema';
import { InquiryWhereInputObjectSchema } from './objects/InquiryWhereInput.schema';
import { InquiryWhereUniqueInputObjectSchema } from './objects/InquiryWhereUniqueInput.schema';
import { InquiryCountAggregateInputObjectSchema } from './objects/InquiryCountAggregateInput.schema';
import { InquiryMinAggregateInputObjectSchema } from './objects/InquiryMinAggregateInput.schema';
import { InquiryMaxAggregateInputObjectSchema } from './objects/InquiryMaxAggregateInput.schema';
import { InquiryAvgAggregateInputObjectSchema } from './objects/InquiryAvgAggregateInput.schema';
import { InquirySumAggregateInputObjectSchema } from './objects/InquirySumAggregateInput.schema';

export const InquiryAggregateSchema = z.object({
  orderBy: z
    .union([InquiryOrderByWithRelationInputObjectSchema, InquiryOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: InquiryWhereInputObjectSchema.optional(),
  cursor: InquiryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), InquiryCountAggregateInputObjectSchema]).optional(),
  _min: InquiryMinAggregateInputObjectSchema.optional(),
  _max: InquiryMaxAggregateInputObjectSchema.optional(),
  _avg: InquiryAvgAggregateInputObjectSchema.optional(),
  _sum: InquirySumAggregateInputObjectSchema.optional(),
});
