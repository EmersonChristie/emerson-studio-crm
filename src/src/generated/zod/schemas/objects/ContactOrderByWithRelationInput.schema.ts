import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ContactAddressOrderByWithRelationInputObjectSchema } from './ContactAddressOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { InquiryOrderByRelationAggregateInputObjectSchema } from './InquiryOrderByRelationAggregateInput.schema';
import { EmailCampaignOrderByRelationAggregateInputObjectSchema } from './EmailCampaignOrderByRelationAggregateInput.schema';
import { SaleOrderByRelationAggregateInputObjectSchema } from './SaleOrderByRelationAggregateInput.schema';
import { ArtworkPrivateViewOrderByRelationAggregateInputObjectSchema } from './ArtworkPrivateViewOrderByRelationAggregateInput.schema';
import { ArtworkOfferOrderByRelationAggregateInputObjectSchema } from './ArtworkOfferOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactOrderByWithRelationInput> = z
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
    address: z.lazy(() => ContactAddressOrderByWithRelationInputObjectSchema).optional(),
    createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    inquiries: z.lazy(() => InquiryOrderByRelationAggregateInputObjectSchema).optional(),
    emailCampaigns: z.lazy(() => EmailCampaignOrderByRelationAggregateInputObjectSchema).optional(),
    sales: z.lazy(() => SaleOrderByRelationAggregateInputObjectSchema).optional(),
    privateViews: z.lazy(() => ArtworkPrivateViewOrderByRelationAggregateInputObjectSchema).optional(),
    offers: z.lazy(() => ArtworkOfferOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ContactOrderByWithRelationInputObjectSchema = Schema;
