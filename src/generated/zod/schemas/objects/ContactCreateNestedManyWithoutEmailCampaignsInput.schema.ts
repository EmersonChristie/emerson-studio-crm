import { z } from 'zod';
import { ContactCreateWithoutEmailCampaignsInputObjectSchema } from './ContactCreateWithoutEmailCampaignsInput.schema';
import { ContactUncheckedCreateWithoutEmailCampaignsInputObjectSchema } from './ContactUncheckedCreateWithoutEmailCampaignsInput.schema';
import { ContactCreateOrConnectWithoutEmailCampaignsInputObjectSchema } from './ContactCreateOrConnectWithoutEmailCampaignsInput.schema';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateNestedManyWithoutEmailCampaignsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ContactCreateWithoutEmailCampaignsInputObjectSchema),
        z.lazy(() => ContactCreateWithoutEmailCampaignsInputObjectSchema).array(),
        z.lazy(() => ContactUncheckedCreateWithoutEmailCampaignsInputObjectSchema),
        z.lazy(() => ContactUncheckedCreateWithoutEmailCampaignsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ContactCreateOrConnectWithoutEmailCampaignsInputObjectSchema),
        z.lazy(() => ContactCreateOrConnectWithoutEmailCampaignsInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ContactWhereUniqueInputObjectSchema),
        z.lazy(() => ContactWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ContactCreateNestedManyWithoutEmailCampaignsInputObjectSchema = Schema;
