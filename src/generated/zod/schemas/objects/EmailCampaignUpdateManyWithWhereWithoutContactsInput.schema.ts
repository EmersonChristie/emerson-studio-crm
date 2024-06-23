import { z } from 'zod';
import { EmailCampaignScalarWhereInputObjectSchema } from './EmailCampaignScalarWhereInput.schema';
import { EmailCampaignUpdateManyMutationInputObjectSchema } from './EmailCampaignUpdateManyMutationInput.schema';
import { EmailCampaignUncheckedUpdateManyWithoutEmailCampaignsInputObjectSchema } from './EmailCampaignUncheckedUpdateManyWithoutEmailCampaignsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignUpdateManyWithWhereWithoutContactsInput> = z
  .object({
    where: z.lazy(() => EmailCampaignScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => EmailCampaignUpdateManyMutationInputObjectSchema),
      z.lazy(() => EmailCampaignUncheckedUpdateManyWithoutEmailCampaignsInputObjectSchema),
    ]),
  })
  .strict();

export const EmailCampaignUpdateManyWithWhereWithoutContactsInputObjectSchema = Schema;
