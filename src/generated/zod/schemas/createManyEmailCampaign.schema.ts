import { z } from 'zod';
import { EmailCampaignCreateManyInputObjectSchema } from './objects/EmailCampaignCreateManyInput.schema';

export const EmailCampaignCreateManySchema = z.object({
  data: z.union([EmailCampaignCreateManyInputObjectSchema, z.array(EmailCampaignCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
});
