import { z } from 'zod';
import { ContactWhereInputObjectSchema } from './ContactWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactRelationFilter> = z
  .object({
    is: z
      .lazy(() => ContactWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ContactWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ContactRelationFilterObjectSchema = Schema;
