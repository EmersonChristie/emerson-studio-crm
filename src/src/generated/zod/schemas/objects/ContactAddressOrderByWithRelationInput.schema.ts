import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ContactOrderByWithRelationInputObjectSchema } from './ContactOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    street: z.lazy(() => SortOrderSchema).optional(),
    city: z.lazy(() => SortOrderSchema).optional(),
    state: z.lazy(() => SortOrderSchema).optional(),
    zip: z.lazy(() => SortOrderSchema).optional(),
    contactId: z.lazy(() => SortOrderSchema).optional(),
    contact: z.lazy(() => ContactOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const ContactAddressOrderByWithRelationInputObjectSchema = Schema;
