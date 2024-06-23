import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { InquiryCountOrderByAggregateInputObjectSchema } from './InquiryCountOrderByAggregateInput.schema';
import { InquiryAvgOrderByAggregateInputObjectSchema } from './InquiryAvgOrderByAggregateInput.schema';
import { InquiryMaxOrderByAggregateInputObjectSchema } from './InquiryMaxOrderByAggregateInput.schema';
import { InquiryMinOrderByAggregateInputObjectSchema } from './InquiryMinOrderByAggregateInput.schema';
import { InquirySumOrderByAggregateInputObjectSchema } from './InquirySumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    message: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    artworkId: z.lazy(() => SortOrderSchema).optional(),
    contactId: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => InquiryCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => InquiryAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => InquiryMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => InquiryMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => InquirySumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const InquiryOrderByWithAggregationInputObjectSchema = Schema;
