import { z } from 'zod';
import { EmailCampaignWhereUniqueInputObjectSchema } from './EmailCampaignWhereUniqueInput.schema';
import { EmailCampaignUpdateWithoutCreatedByInputObjectSchema } from './EmailCampaignUpdateWithoutCreatedByInput.schema';
import { EmailCampaignUncheckedUpdateWithoutCreatedByInputObjectSchema } from './EmailCampaignUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignUpdateWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => EmailCampaignUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => EmailCampaignUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const EmailCampaignUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema;
