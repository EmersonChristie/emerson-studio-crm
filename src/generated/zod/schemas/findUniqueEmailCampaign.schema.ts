import { z } from 'zod';
import { EmailCampaignWhereUniqueInputObjectSchema } from './objects/EmailCampaignWhereUniqueInput.schema';

export const EmailCampaignFindUniqueSchema = z.object({ where: EmailCampaignWhereUniqueInputObjectSchema });
