import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    contactId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ContactAddressSumOrderByAggregateInputObjectSchema = Schema;
