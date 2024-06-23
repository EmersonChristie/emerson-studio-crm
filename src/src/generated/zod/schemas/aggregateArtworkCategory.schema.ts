import { z } from 'zod';
import { ArtworkCategoryOrderByWithRelationInputObjectSchema } from './objects/ArtworkCategoryOrderByWithRelationInput.schema';
import { ArtworkCategoryWhereInputObjectSchema } from './objects/ArtworkCategoryWhereInput.schema';
import { ArtworkCategoryWhereUniqueInputObjectSchema } from './objects/ArtworkCategoryWhereUniqueInput.schema';
import { ArtworkCategoryCountAggregateInputObjectSchema } from './objects/ArtworkCategoryCountAggregateInput.schema';
import { ArtworkCategoryMinAggregateInputObjectSchema } from './objects/ArtworkCategoryMinAggregateInput.schema';
import { ArtworkCategoryMaxAggregateInputObjectSchema } from './objects/ArtworkCategoryMaxAggregateInput.schema';
import { ArtworkCategoryAvgAggregateInputObjectSchema } from './objects/ArtworkCategoryAvgAggregateInput.schema';
import { ArtworkCategorySumAggregateInputObjectSchema } from './objects/ArtworkCategorySumAggregateInput.schema';

export const ArtworkCategoryAggregateSchema = z.object({
  orderBy: z
    .union([
      ArtworkCategoryOrderByWithRelationInputObjectSchema,
      ArtworkCategoryOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ArtworkCategoryWhereInputObjectSchema.optional(),
  cursor: ArtworkCategoryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), ArtworkCategoryCountAggregateInputObjectSchema]).optional(),
  _min: ArtworkCategoryMinAggregateInputObjectSchema.optional(),
  _max: ArtworkCategoryMaxAggregateInputObjectSchema.optional(),
  _avg: ArtworkCategoryAvgAggregateInputObjectSchema.optional(),
  _sum: ArtworkCategorySumAggregateInputObjectSchema.optional(),
});
