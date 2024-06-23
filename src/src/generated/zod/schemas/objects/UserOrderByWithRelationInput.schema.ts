import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema';
import { ArtworkPrivateViewOrderByRelationAggregateInputObjectSchema } from './ArtworkPrivateViewOrderByRelationAggregateInput.schema';
import { EmailCampaignOrderByRelationAggregateInputObjectSchema } from './EmailCampaignOrderByRelationAggregateInput.schema';
import { InvoiceOrderByRelationAggregateInputObjectSchema } from './InvoiceOrderByRelationAggregateInput.schema';
import { ContactOrderByRelationAggregateInputObjectSchema } from './ContactOrderByRelationAggregateInput.schema';
import { ArtworkOrderByRelationAggregateInputObjectSchema } from './ArtworkOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    organizationId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    age: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    salt: z.lazy(() => SortOrderSchema).optional(),
    token: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    tokenExpiry: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    resetToken: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    resetTokenExpiry: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    emailConfirmed: z.lazy(() => SortOrderSchema).optional(),
    emailConfirmToken: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    emailConfirmTokenExpiry: z
      .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
      .optional(),
    emailConfirmedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    organization: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional(),
    privateViews: z.lazy(() => ArtworkPrivateViewOrderByRelationAggregateInputObjectSchema).optional(),
    emailCampaigns: z.lazy(() => EmailCampaignOrderByRelationAggregateInputObjectSchema).optional(),
    invoices: z.lazy(() => InvoiceOrderByRelationAggregateInputObjectSchema).optional(),
    contacts: z.lazy(() => ContactOrderByRelationAggregateInputObjectSchema).optional(),
    artworks: z.lazy(() => ArtworkOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
