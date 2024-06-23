import { z } from 'zod';
import { ArtworkPrivateViewWhereInputObjectSchema } from './objects/ArtworkPrivateViewWhereInput.schema';
import { ArtworkPrivateViewOrderByWithAggregationInputObjectSchema } from './objects/ArtworkPrivateViewOrderByWithAggregationInput.schema';
import { ArtworkPrivateViewScalarWhereWithAggregatesInputObjectSchema } from './objects/ArtworkPrivateViewScalarWhereWithAggregatesInput.schema';
import { ArtworkPrivateViewScalarFieldEnumSchema } from './enums/ArtworkPrivateViewScalarFieldEnum.schema';

export const ArtworkPrivateViewGroupBySchema = z.object({
  where: ArtworkPrivateViewWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ArtworkPrivateViewOrderByWithAggregationInputObjectSchema,
      ArtworkPrivateViewOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ArtworkPrivateViewScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ArtworkPrivateViewScalarFieldEnumSchema),
});
