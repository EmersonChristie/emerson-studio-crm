import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrganizationCreateWithoutUsersInput> = z
  .object({
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const OrganizationCreateWithoutUsersInputObjectSchema = Schema;
