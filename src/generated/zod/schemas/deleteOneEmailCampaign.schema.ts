import { z } from 'zod';
import { EmailCampaignWhereUniqueInputObjectSchema } from './objects/EmailCampaignWhereUniqueInput.schema';

export const EmailCampaignDeleteOneSchema = z.object({ where: EmailCampaignWhereUniqueInputObjectSchema });
