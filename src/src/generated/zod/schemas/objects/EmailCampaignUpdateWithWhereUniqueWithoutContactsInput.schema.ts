import { z } from 'zod';
import { EmailCampaignWhereUniqueInputObjectSchema } from './EmailCampaignWhereUniqueInput.schema';
import { EmailCampaignUpdateWithoutContactsInputObjectSchema } from './EmailCampaignUpdateWithoutContactsInput.schema';
import { EmailCampaignUncheckedUpdateWithoutContactsInputObjectSchema } from './EmailCampaignUncheckedUpdateWithoutContactsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignUpdateWithWhereUniqueWithoutContactsInput> = z
  .object({
    where: z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => EmailCampaignUpdateWithoutContactsInputObjectSchema),
      z.lazy(() => EmailCampaignUncheckedUpdateWithoutContactsInputObjectSchema),
    ]),
  })
  .strict();

export const EmailCampaignUpdateWithWhereUniqueWithoutContactsInputObjectSchema = Schema;
