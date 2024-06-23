import { z } from 'zod';
import { UserCreateNestedManyWithoutOrganizationInputObjectSchema } from './UserCreateNestedManyWithoutOrganizationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrganizationCreateInput> = z
  .object({
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    users: z.lazy(() => UserCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  })
  .strict();

export const OrganizationCreateInputObjectSchema = Schema;
