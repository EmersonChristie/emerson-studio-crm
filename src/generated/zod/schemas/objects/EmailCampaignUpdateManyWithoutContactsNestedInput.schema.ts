import { z } from 'zod';
import { EmailCampaignCreateWithoutContactsInputObjectSchema } from './EmailCampaignCreateWithoutContactsInput.schema';
import { EmailCampaignUncheckedCreateWithoutContactsInputObjectSchema } from './EmailCampaignUncheckedCreateWithoutContactsInput.schema';
import { EmailCampaignCreateOrConnectWithoutContactsInputObjectSchema } from './EmailCampaignCreateOrConnectWithoutContactsInput.schema';
import { EmailCampaignUpsertWithWhereUniqueWithoutContactsInputObjectSchema } from './EmailCampaignUpsertWithWhereUniqueWithoutContactsInput.schema';
import { EmailCampaignWhereUniqueInputObjectSchema } from './EmailCampaignWhereUniqueInput.schema';
import { EmailCampaignUpdateWithWhereUniqueWithoutContactsInputObjectSchema } from './EmailCampaignUpdateWithWhereUniqueWithoutContactsInput.schema';
import { EmailCampaignUpdateManyWithWhereWithoutContactsInputObjectSchema } from './EmailCampaignUpdateManyWithWhereWithoutContactsInput.schema';
import { EmailCampaignScalarWhereInputObjectSchema } from './EmailCampaignScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignUpdateManyWithoutContactsNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => EmailCampaignUpsertWithWhereUniqueWithoutContactsInputObjectSchema),
        z.lazy(() => EmailCampaignUpsertWithWhereUniqueWithoutContactsInputObjectSchema).array(),
      ])
      .optional(),
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
        z.lazy(() => EmailCampaignUpdateWithWhereUniqueWithoutContactsInputObjectSchema),
        z.lazy(() => EmailCampaignUpdateWithWhereUniqueWithoutContactsInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => EmailCampaignUpdateManyWithWhereWithoutContactsInputObjectSchema),
        z.lazy(() => EmailCampaignUpdateManyWithWhereWithoutContactsInputObjectSchema).array(),
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

export const EmailCampaignUpdateManyWithoutContactsNestedInputObjectSchema = Schema;
