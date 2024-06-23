import { z } from 'zod';
import { OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutUsersInputObjectSchema } from './OrganizationCreateWithoutUsersInput.schema';
import { OrganizationUncheckedCreateWithoutUsersInputObjectSchema } from './OrganizationUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OrganizationCreateWithoutUsersInputObjectSchema),
      z.lazy(() => OrganizationUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const OrganizationCreateOrConnectWithoutUsersInputObjectSchema = Schema;
