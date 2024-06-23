import { z } from 'zod';
import { OrganizationOrderByWithRelationInputObjectSchema } from './objects/OrganizationOrderByWithRelationInput.schema';
import { OrganizationWhereInputObjectSchema } from './objects/OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema } from './objects/OrganizationWhereUniqueInput.schema';
import { OrganizationCountAggregateInputObjectSchema } from './objects/OrganizationCountAggregateInput.schema';
import { OrganizationMinAggregateInputObjectSchema } from './objects/OrganizationMinAggregateInput.schema';
import { OrganizationMaxAggregateInputObjectSchema } from './objects/OrganizationMaxAggregateInput.schema';
import { OrganizationAvgAggregateInputObjectSchema } from './objects/OrganizationAvgAggregateInput.schema';
import { OrganizationSumAggregateInputObjectSchema } from './objects/OrganizationSumAggregateInput.schema';

export const OrganizationAggregateSchema = z.object({
  orderBy: z
    .union([OrganizationOrderByWithRelationInputObjectSchema, OrganizationOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: OrganizationWhereInputObjectSchema.optional(),
  cursor: OrganizationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), OrganizationCountAggregateInputObjectSchema]).optional(),
  _min: OrganizationMinAggregateInputObjectSchema.optional(),
  _max: OrganizationMaxAggregateInputObjectSchema.optional(),
  _avg: OrganizationAvgAggregateInputObjectSchema.optional(),
  _sum: OrganizationSumAggregateInputObjectSchema.optional(),
});
