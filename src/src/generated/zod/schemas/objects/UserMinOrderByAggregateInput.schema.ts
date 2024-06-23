import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    organizationId: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    age: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    salt: z.lazy(() => SortOrderSchema).optional(),
    token: z.lazy(() => SortOrderSchema).optional(),
    tokenExpiry: z.lazy(() => SortOrderSchema).optional(),
    resetToken: z.lazy(() => SortOrderSchema).optional(),
    resetTokenExpiry: z.lazy(() => SortOrderSchema).optional(),
    emailConfirmed: z.lazy(() => SortOrderSchema).optional(),
    emailConfirmToken: z.lazy(() => SortOrderSchema).optional(),
    emailConfirmTokenExpiry: z.lazy(() => SortOrderSchema).optional(),
    emailConfirmedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserMinOrderByAggregateInputObjectSchema = Schema;
