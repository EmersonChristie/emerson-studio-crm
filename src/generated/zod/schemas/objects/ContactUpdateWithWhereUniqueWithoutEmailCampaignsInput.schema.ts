import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateWithoutEmailCampaignsInputObjectSchema } from './ContactUpdateWithoutEmailCampaignsInput.schema';
import { ContactUncheckedUpdateWithoutEmailCampaignsInputObjectSchema } from './ContactUncheckedUpdateWithoutEmailCampaignsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactUpdateWithWhereUniqueWithoutEmailCampaignsInput> = z
  .object({
    where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ContactUpdateWithoutEmailCampaignsInputObjectSchema),
      z.lazy(() => ContactUncheckedUpdateWithoutEmailCampaignsInputObjectSchema),
    ]),
  })
  .strict();

export const ContactUpdateWithWhereUniqueWithoutEmailCampaignsInputObjectSchema = Schema;
