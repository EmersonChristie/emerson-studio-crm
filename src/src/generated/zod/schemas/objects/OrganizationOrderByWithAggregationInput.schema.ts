import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrganizationCountOrderByAggregateInputObjectSchema } from './OrganizationCountOrderByAggregateInput.schema';
import { OrganizationAvgOrderByAggregateInputObjectSchema } from './OrganizationAvgOrderByAggregateInput.schema';
import { OrganizationMaxOrderByAggregateInputObjectSchema } from './OrganizationMaxOrderByAggregateInput.schema';
import { OrganizationMinOrderByAggregateInputObjectSchema } from './OrganizationMinOrderByAggregateInput.schema';
import { OrganizationSumOrderByAggregateInputObjectSchema } from './OrganizationSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrganizationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => OrganizationCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => OrganizationAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => OrganizationMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => OrganizationMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => OrganizationSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const OrganizationOrderByWithAggregationInputObjectSchema = Schema;
