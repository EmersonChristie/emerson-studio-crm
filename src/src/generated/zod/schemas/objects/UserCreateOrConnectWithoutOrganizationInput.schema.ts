import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOrganizationInputObjectSchema } from './UserCreateWithoutOrganizationInput.schema';
import { UserUncheckedCreateWithoutOrganizationInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutOrganizationInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutOrganizationInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutOrganizationInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutOrganizationInputObjectSchema = Schema;
