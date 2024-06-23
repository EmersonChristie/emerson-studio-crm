import { z } from 'zod';
import { OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrganizationRelationFilter> = z
  .object({
    is: z
      .lazy(() => OrganizationWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => OrganizationWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const OrganizationRelationFilterObjectSchema = Schema;
