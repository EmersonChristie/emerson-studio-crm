import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutEmailCampaignsInputObjectSchema } from './UserCreateWithoutEmailCampaignsInput.schema';
import { UserUncheckedCreateWithoutEmailCampaignsInputObjectSchema } from './UserUncheckedCreateWithoutEmailCampaignsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutEmailCampaignsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutEmailCampaignsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutEmailCampaignsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutEmailCampaignsInputObjectSchema = Schema;
