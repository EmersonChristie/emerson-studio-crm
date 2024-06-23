import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutUsersInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const OrganizationUncheckedCreateWithoutUsersInputObjectSchema = Schema;
