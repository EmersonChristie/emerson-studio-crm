import { z } from 'zod';
import { ArtworkOrderByWithRelationInputObjectSchema } from './objects/ArtworkOrderByWithRelationInput.schema';
import { ArtworkWhereInputObjectSchema } from './objects/ArtworkWhereInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './objects/ArtworkWhereUniqueInput.schema';
import { ArtworkCountAggregateInputObjectSchema } from './objects/ArtworkCountAggregateInput.schema';
import { ArtworkMinAggregateInputObjectSchema } from './objects/ArtworkMinAggregateInput.schema';
import { ArtworkMaxAggregateInputObjectSchema } from './objects/ArtworkMaxAggregateInput.schema';
import { ArtworkAvgAggregateInputObjectSchema } from './objects/ArtworkAvgAggregateInput.schema';
import { ArtworkSumAggregateInputObjectSchema } from './objects/ArtworkSumAggregateInput.schema';

export const ArtworkAggregateSchema = z.object({
  orderBy: z
    .union([ArtworkOrderByWithRelationInputObjectSchema, ArtworkOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: ArtworkWhereInputObjectSchema.optional(),
  cursor: ArtworkWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), ArtworkCountAggregateInputObjectSchema]).optional(),
  _min: ArtworkMinAggregateInputObjectSchema.optional(),
  _max: ArtworkMaxAggregateInputObjectSchema.optional(),
  _avg: ArtworkAvgAggregateInputObjectSchema.optional(),
  _sum: ArtworkSumAggregateInputObjectSchema.optional(),
});
