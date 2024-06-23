import { z } from 'zod';
import { UserCreateWithoutEmailCampaignsInputObjectSchema } from './UserCreateWithoutEmailCampaignsInput.schema';
import { UserUncheckedCreateWithoutEmailCampaignsInputObjectSchema } from './UserUncheckedCreateWithoutEmailCampaignsInput.schema';
import { UserCreateOrConnectWithoutEmailCampaignsInputObjectSchema } from './UserCreateOrConnectWithoutEmailCampaignsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutEmailCampaignsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutEmailCampaignsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutEmailCampaignsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEmailCampaignsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutEmailCampaignsInputObjectSchema = Schema;
