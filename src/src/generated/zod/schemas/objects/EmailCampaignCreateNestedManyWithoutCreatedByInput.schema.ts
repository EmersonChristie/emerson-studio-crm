import { z } from 'zod';
import { EmailCampaignCreateWithoutCreatedByInputObjectSchema } from './EmailCampaignCreateWithoutCreatedByInput.schema';
import { EmailCampaignUncheckedCreateWithoutCreatedByInputObjectSchema } from './EmailCampaignUncheckedCreateWithoutCreatedByInput.schema';
import { EmailCampaignCreateOrConnectWithoutCreatedByInputObjectSchema } from './EmailCampaignCreateOrConnectWithoutCreatedByInput.schema';
import { EmailCampaignCreateManyCreatedByInputEnvelopeObjectSchema } from './EmailCampaignCreateManyCreatedByInputEnvelope.schema';
import { EmailCampaignWhereUniqueInputObjectSchema } from './EmailCampaignWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignCreateNestedManyWithoutCreatedByInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EmailCampaignCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => EmailCampaignCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => EmailCampaignUncheckedCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => EmailCampaignUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => EmailCampaignCreateOrConnectWithoutCreatedByInputObjectSchema),
        z.lazy(() => EmailCampaignCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => EmailCampaignCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema),
        z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const EmailCampaignCreateNestedManyWithoutCreatedByInputObjectSchema = Schema;
