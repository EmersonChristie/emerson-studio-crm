import { z } from 'zod';
import { EmailCampaignCreateWithoutContactsInputObjectSchema } from './EmailCampaignCreateWithoutContactsInput.schema';
import { EmailCampaignUncheckedCreateWithoutContactsInputObjectSchema } from './EmailCampaignUncheckedCreateWithoutContactsInput.schema';
import { EmailCampaignCreateOrConnectWithoutContactsInputObjectSchema } from './EmailCampaignCreateOrConnectWithoutContactsInput.schema';
import { EmailCampaignWhereUniqueInputObjectSchema } from './EmailCampaignWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignCreateNestedManyWithoutContactsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EmailCampaignCreateWithoutContactsInputObjectSchema),
        z.lazy(() => EmailCampaignCreateWithoutContactsInputObjectSchema).array(),
        z.lazy(() => EmailCampaignUncheckedCreateWithoutContactsInputObjectSchema),
        z.lazy(() => EmailCampaignUncheckedCreateWithoutContactsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => EmailCampaignCreateOrConnectWithoutContactsInputObjectSchema),
        z.lazy(() => EmailCampaignCreateOrConnectWithoutContactsInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema),
        z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const EmailCampaignCreateNestedManyWithoutContactsInputObjectSchema = Schema;
