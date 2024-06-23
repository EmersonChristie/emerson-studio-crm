import { z } from 'zod';
import { ContactAddressWhereInputObjectSchema } from './ContactAddressWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressRelationFilter> = z
  .object({
    is: z
      .lazy(() => ContactAddressWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ContactAddressWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ContactAddressRelationFilterObjectSchema = Schema;
