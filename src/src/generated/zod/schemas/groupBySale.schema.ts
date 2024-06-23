import { z } from 'zod';
import { SaleWhereInputObjectSchema } from './objects/SaleWhereInput.schema';
import { SaleOrderByWithAggregationInputObjectSchema } from './objects/SaleOrderByWithAggregationInput.schema';
import { SaleScalarWhereWithAggregatesInputObjectSchema } from './objects/SaleScalarWhereWithAggregatesInput.schema';
import { SaleScalarFieldEnumSchema } from './enums/SaleScalarFieldEnum.schema';

export const SaleGroupBySchema = z.object({
  where: SaleWhereInputObjectSchema.optional(),
  orderBy: z
    .union([SaleOrderByWithAggregationInputObjectSchema, SaleOrderByWithAggregationInputObjectSchema.array()])
    .optional(),
  having: SaleScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SaleScalarFieldEnumSchema),
});
