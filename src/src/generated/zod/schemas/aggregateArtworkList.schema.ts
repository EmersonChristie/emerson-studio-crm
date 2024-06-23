import { z } from 'zod';
import { ArtworkListOrderByWithRelationInputObjectSchema } from './objects/ArtworkListOrderByWithRelationInput.schema';
import { ArtworkListWhereInputObjectSchema } from './objects/ArtworkListWhereInput.schema';
import { ArtworkListWhereUniqueInputObjectSchema } from './objects/ArtworkListWhereUniqueInput.schema';
import { ArtworkListCountAggregateInputObjectSchema } from './objects/ArtworkListCountAggregateInput.schema';
import { ArtworkListMinAggregateInputObjectSchema } from './objects/ArtworkListMinAggregateInput.schema';
import { ArtworkListMaxAggregateInputObjectSchema } from './objects/ArtworkListMaxAggregateInput.schema';
import { ArtworkListAvgAggregateInputObjectSchema } from './objects/ArtworkListAvgAggregateInput.schema';
import { ArtworkListSumAggregateInputObjectSchema } from './objects/ArtworkListSumAggregateInput.schema';

export const ArtworkListAggregateSchema = z.object({
  orderBy: z
    .union([ArtworkListOrderByWithRelationInputObjectSchema, ArtworkListOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: ArtworkListWhereInputObjectSchema.optional(),
  cursor: ArtworkListWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), ArtworkListCountAggregateInputObjectSchema]).optional(),
  _min: ArtworkListMinAggregateInputObjectSchema.optional(),
  _max: ArtworkListMaxAggregateInputObjectSchema.optional(),
  _avg: ArtworkListAvgAggregateInputObjectSchema.optional(),
  _sum: ArtworkListSumAggregateInputObjectSchema.optional(),
});
