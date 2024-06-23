import { z } from 'zod';
import { EmailCampaignCreateInputObjectSchema } from './objects/EmailCampaignCreateInput.schema';
import { EmailCampaignUncheckedCreateInputObjectSchema } from './objects/EmailCampaignUncheckedCreateInput.schema';

export const EmailCampaignCreateOneSchema = z.object({
  data: z.union([EmailCampaignCreateInputObjectSchema, EmailCampaignUncheckedCreateInputObjectSchema]),
});
