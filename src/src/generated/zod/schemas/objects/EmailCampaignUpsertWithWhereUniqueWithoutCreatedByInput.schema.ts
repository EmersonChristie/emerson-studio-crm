import { z } from 'zod';
import { EmailCampaignWhereUniqueInputObjectSchema } from './EmailCampaignWhereUniqueInput.schema';
import { EmailCampaignUpdateWithoutCreatedByInputObjectSchema } from './EmailCampaignUpdateWithoutCreatedByInput.schema';
import { EmailCampaignUncheckedUpdateWithoutCreatedByInputObjectSchema } from './EmailCampaignUncheckedUpdateWithoutCreatedByInput.schema';
import { EmailCampaignCreateWithoutCreatedByInputObjectSchema } from './EmailCampaignCreateWithoutCreatedByInput.schema';
import { EmailCampaignUncheckedCreateWithoutCreatedByInputObjectSchema } from './EmailCampaignUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignUpsertWithWhereUniqueWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => EmailCampaignUpdateWithoutCreatedByInputObjectSchema),
      z.lazy(() => EmailCampaignUncheckedUpdateWithoutCreatedByInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EmailCampaignCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => EmailCampaignUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const EmailCampaignUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema = Schema;
