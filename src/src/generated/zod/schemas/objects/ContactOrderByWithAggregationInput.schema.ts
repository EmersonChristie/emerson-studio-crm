import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ContactCountOrderByAggregateInputObjectSchema } from './ContactCountOrderByAggregateInput.schema';
import { ContactAvgOrderByAggregateInputObjectSchema } from './ContactAvgOrderByAggregateInput.schema';
import { ContactMaxOrderByAggregateInputObjectSchema } from './ContactMaxOrderByAggregateInput.schema';
import { ContactMinOrderByAggregateInputObjectSchema } from './ContactMinOrderByAggregateInput.schema';
import { ContactSumOrderByAggregateInputObjectSchema } from './ContactSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    lastName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phone: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    notes: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    source: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    _count: z.lazy(() => ContactCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ContactAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ContactMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ContactMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ContactSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ContactOrderByWithAggregationInputObjectSchema = Schema;
