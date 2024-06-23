import { z } from 'zod';
import { OrganizationUpdateWithoutUsersInputObjectSchema } from './OrganizationUpdateWithoutUsersInput.schema';
import { OrganizationUncheckedUpdateWithoutUsersInputObjectSchema } from './OrganizationUncheckedUpdateWithoutUsersInput.schema';
import { OrganizationCreateWithoutUsersInputObjectSchema } from './OrganizationCreateWithoutUsersInput.schema';
import { OrganizationUncheckedCreateWithoutUsersInputObjectSchema } from './OrganizationUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrganizationUpsertWithoutUsersInput> = z
  .object({
    update: z.union([
      z.lazy(() => OrganizationUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => OrganizationUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OrganizationCreateWithoutUsersInputObjectSchema),
      z.lazy(() => OrganizationUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const OrganizationUpsertWithoutUsersInputObjectSchema = Schema;
