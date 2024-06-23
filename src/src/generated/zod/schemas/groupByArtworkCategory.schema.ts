import { z } from 'zod';
import { ArtworkCategoryWhereInputObjectSchema } from './objects/ArtworkCategoryWhereInput.schema';
import { ArtworkCategoryOrderByWithAggregationInputObjectSchema } from './objects/ArtworkCategoryOrderByWithAggregationInput.schema';
import { ArtworkCategoryScalarWhereWithAggregatesInputObjectSchema } from './objects/ArtworkCategoryScalarWhereWithAggregatesInput.schema';
import { ArtworkCategoryScalarFieldEnumSchema } from './enums/ArtworkCategoryScalarFieldEnum.schema';

export const ArtworkCategoryGroupBySchema = z.object({
  where: ArtworkCategoryWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ArtworkCategoryOrderByWithAggregationInputObjectSchema,
      ArtworkCategoryOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ArtworkCategoryScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ArtworkCategoryScalarFieldEnumSchema),
});
