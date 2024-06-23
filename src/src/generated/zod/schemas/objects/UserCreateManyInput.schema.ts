import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    organizationId: z.number().optional().nullable(),
    email: z.string(),
    age: z.number(),
    role: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    password: z.string(),
    salt: z.string(),
    token: z.string().optional().nullable(),
    tokenExpiry: z.coerce.date().optional().nullable(),
    resetToken: z.string().optional().nullable(),
    resetTokenExpiry: z.coerce.date().optional().nullable(),
    emailConfirmed: z.boolean().optional(),
    emailConfirmToken: z.string().optional().nullable(),
    emailConfirmTokenExpiry: z.coerce.date().optional().nullable(),
    emailConfirmedAt: z.coerce.date().optional().nullable(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
