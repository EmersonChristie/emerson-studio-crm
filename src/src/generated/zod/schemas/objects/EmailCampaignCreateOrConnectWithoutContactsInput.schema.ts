import { z } from 'zod';
import { EmailCampaignWhereUniqueInputObjectSchema } from './EmailCampaignWhereUniqueInput.schema';
import { EmailCampaignCreateWithoutContactsInputObjectSchema } from './EmailCampaignCreateWithoutContactsInput.schema';
import { EmailCampaignUncheckedCreateWithoutContactsInputObjectSchema } from './EmailCampaignUncheckedCreateWithoutContactsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignCreateOrConnectWithoutContactsInput> = z
  .object({
    where: z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EmailCampaignCreateWithoutContactsInputObjectSchema),
      z.lazy(() => EmailCampaignUncheckedCreateWithoutContactsInputObjectSchema),
    ]),
  })
  .strict();

export const EmailCampaignCreateOrConnectWithoutContactsInputObjectSchema = Schema;
