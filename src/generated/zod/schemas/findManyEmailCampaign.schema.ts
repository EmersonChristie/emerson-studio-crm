import { z } from 'zod';
import { EmailCampaignOrderByWithRelationInputObjectSchema } from './objects/EmailCampaignOrderByWithRelationInput.schema';
import { EmailCampaignWhereInputObjectSchema } from './objects/EmailCampaignWhereInput.schema';
import { EmailCampaignWhereUniqueInputObjectSchema } from './objects/EmailCampaignWhereUniqueInput.schema';
import { EmailCampaignScalarFieldEnumSchema } from './enums/EmailCampaignScalarFieldEnum.schema';

export const EmailCampaignFindManySchema = z.object({
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
  distinct: z.array(EmailCampaignScalarFieldEnumSchema).optional(),
});
