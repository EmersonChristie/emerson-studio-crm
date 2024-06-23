import { z } from 'zod';
import { UserCreateWithoutEmailCampaignsInputObjectSchema } from './UserCreateWithoutEmailCampaignsInput.schema';
import { UserUncheckedCreateWithoutEmailCampaignsInputObjectSchema } from './UserUncheckedCreateWithoutEmailCampaignsInput.schema';
import { UserCreateOrConnectWithoutEmailCampaignsInputObjectSchema } from './UserCreateOrConnectWithoutEmailCampaignsInput.schema';
import { UserUpsertWithoutEmailCampaignsInputObjectSchema } from './UserUpsertWithoutEmailCampaignsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutEmailCampaignsInputObjectSchema } from './UserUpdateWithoutEmailCampaignsInput.schema';
import { UserUncheckedUpdateWithoutEmailCampaignsInputObjectSchema } from './UserUncheckedUpdateWithoutEmailCampaignsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEmailCampaignsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutEmailCampaignsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutEmailCampaignsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEmailCampaignsInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutEmailCampaignsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutEmailCampaignsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutEmailCampaignsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutEmailCampaignsNestedInputObjectSchema = Schema;
