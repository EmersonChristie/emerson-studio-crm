import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrganizationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => OrganizationWhereInputObjectSchema),
        z.lazy(() => OrganizationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => OrganizationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OrganizationWhereInputObjectSchema),
        z.lazy(() => OrganizationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const OrganizationWhereInputObjectSchema = Schema;
