import { z } from 'zod';
import { ArtworkPrivateViewOrderByWithRelationInputObjectSchema } from './objects/ArtworkPrivateViewOrderByWithRelationInput.schema';
import { ArtworkPrivateViewWhereInputObjectSchema } from './objects/ArtworkPrivateViewWhereInput.schema';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './objects/ArtworkPrivateViewWhereUniqueInput.schema';
import { ArtworkPrivateViewCountAggregateInputObjectSchema } from './objects/ArtworkPrivateViewCountAggregateInput.schema';
import { ArtworkPrivateViewMinAggregateInputObjectSchema } from './objects/ArtworkPrivateViewMinAggregateInput.schema';
import { ArtworkPrivateViewMaxAggregateInputObjectSchema } from './objects/ArtworkPrivateViewMaxAggregateInput.schema';
import { ArtworkPrivateViewAvgAggregateInputObjectSchema } from './objects/ArtworkPrivateViewAvgAggregateInput.schema';
import { ArtworkPrivateViewSumAggregateInputObjectSchema } from './objects/ArtworkPrivateViewSumAggregateInput.schema';

export const ArtworkPrivateViewAggregateSchema = z.object({
  orderBy: z
    .union([
      ArtworkPrivateViewOrderByWithRelationInputObjectSchema,
      ArtworkPrivateViewOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ArtworkPrivateViewWhereInputObjectSchema.optional(),
  cursor: ArtworkPrivateViewWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), ArtworkPrivateViewCountAggregateInputObjectSchema]).optional(),
  _min: ArtworkPrivateViewMinAggregateInputObjectSchema.optional(),
  _max: ArtworkPrivateViewMaxAggregateInputObjectSchema.optional(),
  _avg: ArtworkPrivateViewAvgAggregateInputObjectSchema.optional(),
  _sum: ArtworkPrivateViewSumAggregateInputObjectSchema.optional(),
});
