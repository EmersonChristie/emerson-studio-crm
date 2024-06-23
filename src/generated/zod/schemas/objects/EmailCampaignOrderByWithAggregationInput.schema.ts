import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EmailCampaignCountOrderByAggregateInputObjectSchema } from './EmailCampaignCountOrderByAggregateInput.schema';
import { EmailCampaignAvgOrderByAggregateInputObjectSchema } from './EmailCampaignAvgOrderByAggregateInput.schema';
import { EmailCampaignMaxOrderByAggregateInputObjectSchema } from './EmailCampaignMaxOrderByAggregateInput.schema';
import { EmailCampaignMinOrderByAggregateInputObjectSchema } from './EmailCampaignMinOrderByAggregateInput.schema';
import { EmailCampaignSumOrderByAggregateInputObjectSchema } from './EmailCampaignSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    subject: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    sentAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    template: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    _count: z.lazy(() => EmailCampaignCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => EmailCampaignAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => EmailCampaignMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => EmailCampaignMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => EmailCampaignSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const EmailCampaignOrderByWithAggregationInputObjectSchema = Schema;
