import { z } from 'zod';
import { OrganizationCreateWithoutUsersInputObjectSchema } from './OrganizationCreateWithoutUsersInput.schema';
import { OrganizationUncheckedCreateWithoutUsersInputObjectSchema } from './OrganizationUncheckedCreateWithoutUsersInput.schema';
import { OrganizationCreateOrConnectWithoutUsersInputObjectSchema } from './OrganizationCreateOrConnectWithoutUsersInput.schema';
import { OrganizationUpsertWithoutUsersInputObjectSchema } from './OrganizationUpsertWithoutUsersInput.schema';
import { OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateWithoutUsersInputObjectSchema } from './OrganizationUpdateWithoutUsersInput.schema';
import { OrganizationUncheckedUpdateWithoutUsersInputObjectSchema } from './OrganizationUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrganizationUpdateOneWithoutUsersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrganizationCreateWithoutUsersInputObjectSchema),
        z.lazy(() => OrganizationUncheckedCreateWithoutUsersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutUsersInputObjectSchema).optional(),
    upsert: z.lazy(() => OrganizationUpsertWithoutUsersInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => OrganizationUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => OrganizationUncheckedUpdateWithoutUsersInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const OrganizationUpdateOneWithoutUsersNestedInputObjectSchema = Schema;
