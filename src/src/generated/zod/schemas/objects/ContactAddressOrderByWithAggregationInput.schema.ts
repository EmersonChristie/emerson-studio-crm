import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ContactAddressCountOrderByAggregateInputObjectSchema } from './ContactAddressCountOrderByAggregateInput.schema';
import { ContactAddressAvgOrderByAggregateInputObjectSchema } from './ContactAddressAvgOrderByAggregateInput.schema';
import { ContactAddressMaxOrderByAggregateInputObjectSchema } from './ContactAddressMaxOrderByAggregateInput.schema';
import { ContactAddressMinOrderByAggregateInputObjectSchema } from './ContactAddressMinOrderByAggregateInput.schema';
import { ContactAddressSumOrderByAggregateInputObjectSchema } from './ContactAddressSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    street: z.lazy(() => SortOrderSchema).optional(),
    city: z.lazy(() => SortOrderSchema).optional(),
    state: z.lazy(() => SortOrderSchema).optional(),
    zip: z.lazy(() => SortOrderSchema).optional(),
    contactId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ContactAddressCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ContactAddressAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ContactAddressMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ContactAddressMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ContactAddressSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ContactAddressOrderByWithAggregationInputObjectSchema = Schema;
