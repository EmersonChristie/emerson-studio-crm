import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    organizationId: z.literal(true).optional(),
    email: z.literal(true).optional(),
    age: z.literal(true).optional(),
    role: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    password: z.literal(true).optional(),
    salt: z.literal(true).optional(),
    token: z.literal(true).optional(),
    tokenExpiry: z.literal(true).optional(),
    resetToken: z.literal(true).optional(),
    resetTokenExpiry: z.literal(true).optional(),
    emailConfirmed: z.literal(true).optional(),
    emailConfirmToken: z.literal(true).optional(),
    emailConfirmTokenExpiry: z.literal(true).optional(),
    emailConfirmedAt: z.literal(true).optional(),
  })
  .strict();

export const UserMaxAggregateInputObjectSchema = Schema;
