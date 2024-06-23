import { z } from 'zod';
import { UserUpdateWithoutEmailCampaignsInputObjectSchema } from './UserUpdateWithoutEmailCampaignsInput.schema';
import { UserUncheckedUpdateWithoutEmailCampaignsInputObjectSchema } from './UserUncheckedUpdateWithoutEmailCampaignsInput.schema';
import { UserCreateWithoutEmailCampaignsInputObjectSchema } from './UserCreateWithoutEmailCampaignsInput.schema';
import { UserUncheckedCreateWithoutEmailCampaignsInputObjectSchema } from './UserUncheckedCreateWithoutEmailCampaignsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutEmailCampaignsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutEmailCampaignsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutEmailCampaignsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutEmailCampaignsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutEmailCampaignsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutEmailCampaignsInputObjectSchema = Schema;
