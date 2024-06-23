import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutOrganizationInputObjectSchema } from './UserUpdateWithoutOrganizationInput.schema';
import { UserUncheckedUpdateWithoutOrganizationInputObjectSchema } from './UserUncheckedUpdateWithoutOrganizationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutOrganizationInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateWithoutOrganizationInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutOrganizationInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema = Schema;
