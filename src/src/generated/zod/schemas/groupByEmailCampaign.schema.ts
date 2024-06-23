import { z } from 'zod';
import { EmailCampaignWhereInputObjectSchema } from './objects/EmailCampaignWhereInput.schema';
import { EmailCampaignOrderByWithAggregationInputObjectSchema } from './objects/EmailCampaignOrderByWithAggregationInput.schema';
import { EmailCampaignScalarWhereWithAggregatesInputObjectSchema } from './objects/EmailCampaignScalarWhereWithAggregatesInput.schema';
import { EmailCampaignScalarFieldEnumSchema } from './enums/EmailCampaignScalarFieldEnum.schema';

export const EmailCampaignGroupBySchema = z.object({
  where: EmailCampaignWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      EmailCampaignOrderByWithAggregationInputObjectSchema,
      EmailCampaignOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: EmailCampaignScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(EmailCampaignScalarFieldEnumSchema),
});
