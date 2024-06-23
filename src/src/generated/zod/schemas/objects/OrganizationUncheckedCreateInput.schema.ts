import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutOrganizationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrganizationUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    users: z.lazy(() => UserUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  })
  .strict();

export const OrganizationUncheckedCreateInputObjectSchema = Schema;
