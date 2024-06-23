import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ContactAddressScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ContactAddressScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ContactAddressScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ContactAddressScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ContactAddressScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    street: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    city: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    state: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    zip: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    contactId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
  })
  .strict();

export const ContactAddressScalarWhereWithAggregatesInputObjectSchema = Schema;
