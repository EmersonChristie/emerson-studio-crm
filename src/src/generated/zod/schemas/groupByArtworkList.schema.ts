import { z } from 'zod';
import { ArtworkListWhereInputObjectSchema } from './objects/ArtworkListWhereInput.schema';
import { ArtworkListOrderByWithAggregationInputObjectSchema } from './objects/ArtworkListOrderByWithAggregationInput.schema';
import { ArtworkListScalarWhereWithAggregatesInputObjectSchema } from './objects/ArtworkListScalarWhereWithAggregatesInput.schema';
import { ArtworkListScalarFieldEnumSchema } from './enums/ArtworkListScalarFieldEnum.schema';

export const ArtworkListGroupBySchema = z.object({
  where: ArtworkListWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ArtworkListOrderByWithAggregationInputObjectSchema,
      ArtworkListOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ArtworkListScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ArtworkListScalarFieldEnumSchema),
});
