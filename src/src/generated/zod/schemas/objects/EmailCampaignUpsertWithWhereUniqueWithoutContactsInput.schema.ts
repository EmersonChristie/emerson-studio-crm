import { z } from 'zod';
import { EmailCampaignWhereUniqueInputObjectSchema } from './EmailCampaignWhereUniqueInput.schema';
import { EmailCampaignUpdateWithoutContactsInputObjectSchema } from './EmailCampaignUpdateWithoutContactsInput.schema';
import { EmailCampaignUncheckedUpdateWithoutContactsInputObjectSchema } from './EmailCampaignUncheckedUpdateWithoutContactsInput.schema';
import { EmailCampaignCreateWithoutContactsInputObjectSchema } from './EmailCampaignCreateWithoutContactsInput.schema';
import { EmailCampaignUncheckedCreateWithoutContactsInputObjectSchema } from './EmailCampaignUncheckedCreateWithoutContactsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignUpsertWithWhereUniqueWithoutContactsInput> = z
  .object({
    where: z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => EmailCampaignUpdateWithoutContactsInputObjectSchema),
      z.lazy(() => EmailCampaignUncheckedUpdateWithoutContactsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EmailCampaignCreateWithoutContactsInputObjectSchema),
      z.lazy(() => EmailCampaignUncheckedCreateWithoutContactsInputObjectSchema),
    ]),
  })
  .strict();

export const EmailCampaignUpsertWithWhereUniqueWithoutContactsInputObjectSchema = Schema;
