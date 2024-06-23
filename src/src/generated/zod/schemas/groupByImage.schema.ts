import { z } from 'zod';
import { ImageWhereInputObjectSchema } from './objects/ImageWhereInput.schema';
import { ImageOrderByWithAggregationInputObjectSchema } from './objects/ImageOrderByWithAggregationInput.schema';
import { ImageScalarWhereWithAggregatesInputObjectSchema } from './objects/ImageScalarWhereWithAggregatesInput.schema';
import { ImageScalarFieldEnumSchema } from './enums/ImageScalarFieldEnum.schema';

export const ImageGroupBySchema = z.object({
  where: ImageWhereInputObjectSchema.optional(),
  orderBy: z
    .union([ImageOrderByWithAggregationInputObjectSchema, ImageOrderByWithAggregationInputObjectSchema.array()])
    .optional(),
  having: ImageScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ImageScalarFieldEnumSchema),
});
