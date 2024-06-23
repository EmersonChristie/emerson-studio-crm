import { z } from 'zod';
import { EmailCampaignOrderByWithRelationInputObjectSchema } from './objects/EmailCampaignOrderByWithRelationInput.schema';
import { EmailCampaignWhereInputObjectSchema } from './objects/EmailCampaignWhereInput.schema';
import { EmailCampaignWhereUniqueInputObjectSchema } from './objects/EmailCampaignWhereUniqueInput.schema';
import { EmailCampaignCountAggregateInputObjectSchema } from './objects/EmailCampaignCountAggregateInput.schema';
import { EmailCampaignMinAggregateInputObjectSchema } from './objects/EmailCampaignMinAggregateInput.schema';
import { EmailCampaignMaxAggregateInputObjectSchema } from './objects/EmailCampaignMaxAggregateInput.schema';
import { EmailCampaignAvgAggregateInputObjectSchema } from './objects/EmailCampaignAvgAggregateInput.schema';
import { EmailCampaignSumAggregateInputObjectSchema } from './objects/EmailCampaignSumAggregateInput.schema';

export const EmailCampaignAggregateSchema = z.object({
  orderBy: z
    .union([
      EmailCampaignOrderByWithRelationInputObjectSchema,
      EmailCampaignOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: EmailCampaignWhereInputObjectSchema.optional(),
  cursor: EmailCampaignWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), EmailCampaignCountAggregateInputObjectSchema]).optional(),
  _min: EmailCampaignMinAggregateInputObjectSchema.optional(),
  _max: EmailCampaignMaxAggregateInputObjectSchema.optional(),
  _avg: EmailCampaignAvgAggregateInputObjectSchema.optional(),
  _sum: EmailCampaignSumAggregateInputObjectSchema.optional(),
});
