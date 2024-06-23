import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ContactOrderByWithRelationInputObjectSchema } from './ContactOrderByWithRelationInput.schema';
import { ArtworkOrderByWithRelationInputObjectSchema } from './ArtworkOrderByWithRelationInput.schema';
import { InvoiceOrderByWithRelationInputObjectSchema } from './InvoiceOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    contactId: z.lazy(() => SortOrderSchema).optional(),
    artworkId: z.lazy(() => SortOrderSchema).optional(),
    invoiceId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    paymentStatus: z.lazy(() => SortOrderSchema).optional(),
    contact: z.lazy(() => ContactOrderByWithRelationInputObjectSchema).optional(),
    artwork: z.lazy(() => ArtworkOrderByWithRelationInputObjectSchema).optional(),
    invoice: z.lazy(() => InvoiceOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const SaleOrderByWithRelationInputObjectSchema = Schema;
