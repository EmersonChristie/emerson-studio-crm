import { z } from 'zod';
import { OrganizationCreateWithoutUsersInputObjectSchema } from './OrganizationCreateWithoutUsersInput.schema';
import { OrganizationUncheckedCreateWithoutUsersInputObjectSchema } from './OrganizationUncheckedCreateWithoutUsersInput.schema';
import { OrganizationCreateOrConnectWithoutUsersInputObjectSchema } from './OrganizationCreateOrConnectWithoutUsersInput.schema';
import { OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutUsersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrganizationCreateWithoutUsersInputObjectSchema),
        z.lazy(() => OrganizationUncheckedCreateWithoutUsersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutUsersInputObjectSchema).optional(),
    connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const OrganizationCreateNestedOneWithoutUsersInputObjectSchema = Schema;
