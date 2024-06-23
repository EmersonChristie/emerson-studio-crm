import { z } from 'zod';
import { EmailCampaignWhereUniqueInputObjectSchema } from './EmailCampaignWhereUniqueInput.schema';
import { EmailCampaignCreateWithoutCreatedByInputObjectSchema } from './EmailCampaignCreateWithoutCreatedByInput.schema';
import { EmailCampaignUncheckedCreateWithoutCreatedByInputObjectSchema } from './EmailCampaignUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignCreateOrConnectWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EmailCampaignCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => EmailCampaignUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const EmailCampaignCreateOrConnectWithoutCreatedByInputObjectSchema = Schema;
