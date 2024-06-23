import { z } from 'zod';
import { ImageOrderByWithRelationInputObjectSchema } from './objects/ImageOrderByWithRelationInput.schema';
import { ImageWhereInputObjectSchema } from './objects/ImageWhereInput.schema';
import { ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';
import { ImageCountAggregateInputObjectSchema } from './objects/ImageCountAggregateInput.schema';
import { ImageMinAggregateInputObjectSchema } from './objects/ImageMinAggregateInput.schema';
import { ImageMaxAggregateInputObjectSchema } from './objects/ImageMaxAggregateInput.schema';
import { ImageAvgAggregateInputObjectSchema } from './objects/ImageAvgAggregateInput.schema';
import { ImageSumAggregateInputObjectSchema } from './objects/ImageSumAggregateInput.schema';

export const ImageAggregateSchema = z.object({
  orderBy: z
    .union([ImageOrderByWithRelationInputObjectSchema, ImageOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: ImageWhereInputObjectSchema.optional(),
  cursor: ImageWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), ImageCountAggregateInputObjectSchema]).optional(),
  _min: ImageMinAggregateInputObjectSchema.optional(),
  _max: ImageMaxAggregateInputObjectSchema.optional(),
  _avg: ImageAvgAggregateInputObjectSchema.optional(),
  _sum: ImageSumAggregateInputObjectSchema.optional(),
});
