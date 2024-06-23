import { z } from 'zod';
import { ContactWhereInputObjectSchema } from './ContactWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactListRelationFilter> = z
  .object({
    every: z.lazy(() => ContactWhereInputObjectSchema).optional(),
    some: z.lazy(() => ContactWhereInputObjectSchema).optional(),
    none: z.lazy(() => ContactWhereInputObjectSchema).optional(),
  })
  .strict();

export const ContactListRelationFilterObjectSchema = Schema;
