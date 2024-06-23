import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ContactOrderByWithRelationInputObjectSchema } from './ContactOrderByWithRelationInput.schema';
import { ArtworkOrderByWithRelationInputObjectSchema } from './ArtworkOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    discount: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    message: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    contactId: z.lazy(() => SortOrderSchema).optional(),
    artworkId: z.lazy(() => SortOrderSchema).optional(),
    contact: z.lazy(() => ContactOrderByWithRelationInputObjectSchema).optional(),
    artwork: z.lazy(() => ArtworkOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkOfferOrderByWithRelationInputObjectSchema = Schema;
