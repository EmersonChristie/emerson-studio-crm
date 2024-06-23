import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactCreateWithoutEmailCampaignsInputObjectSchema } from './ContactCreateWithoutEmailCampaignsInput.schema';
import { ContactUncheckedCreateWithoutEmailCampaignsInputObjectSchema } from './ContactUncheckedCreateWithoutEmailCampaignsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactCreateOrConnectWithoutEmailCampaignsInput> = z
  .object({
    where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ContactCreateWithoutEmailCampaignsInputObjectSchema),
      z.lazy(() => ContactUncheckedCreateWithoutEmailCampaignsInputObjectSchema),
    ]),
  })
  .strict();

export const ContactCreateOrConnectWithoutEmailCampaignsInputObjectSchema = Schema;
