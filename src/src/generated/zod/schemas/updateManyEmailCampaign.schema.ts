import { z } from 'zod';
import { EmailCampaignUpdateManyMutationInputObjectSchema } from './objects/EmailCampaignUpdateManyMutationInput.schema';
import { EmailCampaignWhereInputObjectSchema } from './objects/EmailCampaignWhereInput.schema';

export const EmailCampaignUpdateManySchema = z.object({
  data: EmailCampaignUpdateManyMutationInputObjectSchema,
  where: EmailCampaignWhereInputObjectSchema.optional(),
});
