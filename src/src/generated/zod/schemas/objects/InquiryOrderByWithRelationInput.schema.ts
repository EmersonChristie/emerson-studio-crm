import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArtworkOrderByRelationAggregateInputObjectSchema } from './ArtworkOrderByRelationAggregateInput.schema';
import { ContactOrderByWithRelationInputObjectSchema } from './ContactOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    message: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    contactId: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    artworks: z.lazy(() => ArtworkOrderByRelationAggregateInputObjectSchema).optional(),
    contact: z.lazy(() => ContactOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const InquiryOrderByWithRelationInputObjectSchema = Schema;
