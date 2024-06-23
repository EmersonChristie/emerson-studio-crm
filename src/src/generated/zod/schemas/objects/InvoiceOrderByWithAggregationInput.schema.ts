import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InvoiceCountOrderByAggregateInputObjectSchema } from './InvoiceCountOrderByAggregateInput.schema';
import { InvoiceAvgOrderByAggregateInputObjectSchema } from './InvoiceAvgOrderByAggregateInput.schema';
import { InvoiceMaxOrderByAggregateInputObjectSchema } from './InvoiceMaxOrderByAggregateInput.schema';
import { InvoiceMinOrderByAggregateInputObjectSchema } from './InvoiceMinOrderByAggregateInput.schema';
import { InvoiceSumOrderByAggregateInputObjectSchema } from './InvoiceSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    total: z.lazy(() => SortOrderSchema).optional(),
    issuedDate: z.lazy(() => SortOrderSchema).optional(),
    dueDate: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    paymentUrl: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    taxPercentage: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    discountPercentage: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    _count: z.lazy(() => InvoiceCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => InvoiceAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => InvoiceMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => InvoiceMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => InvoiceSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const InvoiceOrderByWithAggregationInputObjectSchema = Schema;
