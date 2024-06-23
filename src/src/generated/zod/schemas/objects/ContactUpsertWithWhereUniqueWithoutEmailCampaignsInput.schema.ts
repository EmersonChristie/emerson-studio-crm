import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithoutEmailCampaignsInputObjectSchema } from './ContactUpdateWithoutEmailCampaignsInput.schema';
import { ContactUncheckedUpdateWithoutEmailCampaignsInputObjectSchema } from './ContactUncheckedUpdateWithoutEmailCampaignsInput.schema';
import { ContactCreateWithoutEmailCampaignsInputObjectSchema } from './ContactCreateWithoutEmailCampaignsInput.schema';
import { ContactUncheckedCreateWithoutEmailCampaignsInputObjectSchema } from './ContactUncheckedCreateWithoutEmailCampaignsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpsertWithWhereUniqueWithoutEmailCampaignsInput> = z
  .object({
    where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ContactUpdateWithoutEmailCampaignsInputObjectSchema),
      z.lazy(() => ContactUncheckedUpdateWithoutEmailCampaignsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ContactCreateWithoutEmailCampaignsInputObjectSchema),
      z.lazy(() => ContactUncheckedCreateWithoutEmailCampaignsInputObjectSchema),
    ]),
  })
  .strict();

export const ContactUpsertWithWhereUniqueWithoutEmailCampaignsInputObjectSchema = Schema;
