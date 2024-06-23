import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ImageOrderByWithRelationInputObjectSchema } from './ImageOrderByWithRelationInput.schema';
import { ImageOrderByRelationAggregateInputObjectSchema } from './ImageOrderByRelationAggregateInput.schema';
import { InquiryOrderByRelationAggregateInputObjectSchema } from './InquiryOrderByRelationAggregateInput.schema';
import { SaleOrderByRelationAggregateInputObjectSchema } from './SaleOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    price: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    artist: z.lazy(() => SortOrderSchema).optional(),
    category: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    mainImageId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    mainImage: z.lazy(() => ImageOrderByWithRelationInputObjectSchema).optional(),
    images: z.lazy(() => ImageOrderByRelationAggregateInputObjectSchema).optional(),
    inquiries: z.lazy(() => InquiryOrderByRelationAggregateInputObjectSchema).optional(),
    sales: z.lazy(() => SaleOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkOrderByWithRelationInputObjectSchema = Schema;
