import { z } from 'zod';
import { EmailCampaignUpdateInputObjectSchema } from './objects/EmailCampaignUpdateInput.schema';
import { EmailCampaignUncheckedUpdateInputObjectSchema } from './objects/EmailCampaignUncheckedUpdateInput.schema';
import { EmailCampaignWhereUniqueInputObjectSchema } from './objects/EmailCampaignWhereUniqueInput.schema';

export const EmailCampaignUpdateOneSchema = z.object({
  data: z.union([EmailCampaignUpdateInputObjectSchema, EmailCampaignUncheckedUpdateInputObjectSchema]),
  where: EmailCampaignWhereUniqueInputObjectSchema,
});
