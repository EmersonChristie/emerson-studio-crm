import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArtworkCategoryOrderByRelationAggregateInputObjectSchema } from './ArtworkCategoryOrderByRelationAggregateInput.schema';
import { ArtworkListOrderByRelationAggregateInputObjectSchema } from './ArtworkListOrderByRelationAggregateInput.schema';
import { ImageOrderByWithRelationInputObjectSchema } from './ImageOrderByWithRelationInput.schema';
import { ImageOrderByRelationAggregateInputObjectSchema } from './ImageOrderByRelationAggregateInput.schema';
import { InquiryOrderByRelationAggregateInputObjectSchema } from './InquiryOrderByRelationAggregateInput.schema';
import { SaleOrderByRelationAggregateInputObjectSchema } from './SaleOrderByRelationAggregateInput.schema';
import { ArtworkPrivateViewOrderByRelationAggregateInputObjectSchema } from './ArtworkPrivateViewOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ArtworkOfferOrderByRelationAggregateInputObjectSchema } from './ArtworkOfferOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    price: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    artist: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    mainImageId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    categories: z.lazy(() => ArtworkCategoryOrderByRelationAggregateInputObjectSchema).optional(),
    lists: z.lazy(() => ArtworkListOrderByRelationAggregateInputObjectSchema).optional(),
    mainImage: z.lazy(() => ImageOrderByWithRelationInputObjectSchema).optional(),
    images: z.lazy(() => ImageOrderByRelationAggregateInputObjectSchema).optional(),
    inquiries: z.lazy(() => InquiryOrderByRelationAggregateInputObjectSchema).optional(),
    sales: z.lazy(() => SaleOrderByRelationAggregateInputObjectSchema).optional(),
    privateViews: z.lazy(() => ArtworkPrivateViewOrderByRelationAggregateInputObjectSchema).optional(),
    createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    offers: z.lazy(() => ArtworkOfferOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkOrderByWithRelationInputObjectSchema = Schema;
