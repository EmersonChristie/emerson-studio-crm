import { z } from 'zod';
import { SaleOrderByWithRelationInputObjectSchema } from './objects/SaleOrderByWithRelationInput.schema';
import { SaleWhereInputObjectSchema } from './objects/SaleWhereInput.schema';
import { SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';
import { SaleCountAggregateInputObjectSchema } from './objects/SaleCountAggregateInput.schema';
import { SaleMinAggregateInputObjectSchema } from './objects/SaleMinAggregateInput.schema';
import { SaleMaxAggregateInputObjectSchema } from './objects/SaleMaxAggregateInput.schema';
import { SaleAvgAggregateInputObjectSchema } from './objects/SaleAvgAggregateInput.schema';
import { SaleSumAggregateInputObjectSchema } from './objects/SaleSumAggregateInput.schema';

export const SaleAggregateSchema = z.object({
  orderBy: z
    .union([SaleOrderByWithRelationInputObjectSchema, SaleOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: SaleWhereInputObjectSchema.optional(),
  cursor: SaleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), SaleCountAggregateInputObjectSchema]).optional(),
  _min: SaleMinAggregateInputObjectSchema.optional(),
  _max: SaleMaxAggregateInputObjectSchema.optional(),
  _avg: SaleAvgAggregateInputObjectSchema.optional(),
  _sum: SaleSumAggregateInputObjectSchema.optional(),
});
