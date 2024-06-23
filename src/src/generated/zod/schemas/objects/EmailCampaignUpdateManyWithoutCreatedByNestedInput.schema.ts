import { z } from 'zod';
import { EmailCampaignCreateWithoutCreatedByInputObjectSchema } from './EmailCampaignCreateWithoutCreatedByInput.schema';
import { EmailCampaignUncheckedCreateWithoutCreatedByInputObjectSchema } from './EmailCampaignUncheckedCreateWithoutCreatedByInput.schema';
import { EmailCampaignCreateOrConnectWithoutCreatedByInputObjectSchema } from './EmailCampaignCreateOrConnectWithoutCreatedByInput.schema';
import { EmailCampaignUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './EmailCampaignUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { EmailCampaignCreateManyCreatedByInputEnvelopeObjectSchema } from './EmailCampaignCreateManyCreatedByInputEnvelope.schema';
import { EmailCampaignWhereUniqueInputObjectSchema } from './EmailCampaignWhereUniqueInput.schema';
import { EmailCampaignUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './EmailCampaignUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { EmailCampaignUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './EmailCampaignUpdateManyWithWhereWithoutCreatedByInput.schema';
import { EmailCampaignScalarWhereInputObjectSchema } from './EmailCampaignScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignUpdateManyWithoutCreatedByNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => EmailCampaignUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => EmailCampaignUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => EmailCampaignCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema),
        z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema),
        z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema),
        z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema),
        z.lazy(() => EmailCampaignWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => EmailCampaignUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => EmailCampaignUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => EmailCampaignUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
        z.lazy(() => EmailCampaignUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => EmailCampaignScalarWhereInputObjectSchema),
        z.lazy(() => EmailCampaignScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const EmailCampaignUpdateManyWithoutCreatedByNestedInputObjectSchema = Schema;
