import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ContactRelationFilterObjectSchema } from './ContactRelationFilter.schema';
import { ContactWhereInputObjectSchema } from './ContactWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ContactAddressWhereInputObjectSchema),
        z.lazy(() => ContactAddressWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ContactAddressWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ContactAddressWhereInputObjectSchema),
        z.lazy(() => ContactAddressWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    street: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    city: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    state: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    zip: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    contactId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    contact: z
      .union([z.lazy(() => ContactRelationFilterObjectSchema), z.lazy(() => ContactWhereInputObjectSchema)])
      .optional(),
  })
  .strict();

export const ContactAddressWhereInputObjectSchema = Schema;
