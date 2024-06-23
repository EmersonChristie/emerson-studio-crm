import { z } from 'zod';
import { EmailCampaignWhereUniqueInputObjectSchema } from './objects/EmailCampaignWhereUniqueInput.schema';
import { EmailCampaignCreateInputObjectSchema } from './objects/EmailCampaignCreateInput.schema';
import { EmailCampaignUncheckedCreateInputObjectSchema } from './objects/EmailCampaignUncheckedCreateInput.schema';
import { EmailCampaignUpdateInputObjectSchema } from './objects/EmailCampaignUpdateInput.schema';
import { EmailCampaignUncheckedUpdateInputObjectSchema } from './objects/EmailCampaignUncheckedUpdateInput.schema';

export const EmailCampaignUpsertSchema = z.object({
  where: EmailCampaignWhereUniqueInputObjectSchema,
  create: z.union([EmailCampaignCreateInputObjectSchema, EmailCampaignUncheckedCreateInputObjectSchema]),
  update: z.union([EmailCampaignUpdateInputObjectSchema, EmailCampaignUncheckedUpdateInputObjectSchema]),
});
