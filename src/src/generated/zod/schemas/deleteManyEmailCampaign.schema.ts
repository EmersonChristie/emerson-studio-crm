import { z } from 'zod';
import { EmailCampaignWhereInputObjectSchema } from './objects/EmailCampaignWhereInput.schema';

export const EmailCampaignDeleteManySchema = z.object({ where: EmailCampaignWhereInputObjectSchema.optional() });
