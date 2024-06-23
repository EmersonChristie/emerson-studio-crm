import { z } from 'zod';
import { ArtworkOfferWhereInputObjectSchema } from './objects/ArtworkOfferWhereInput.schema';
import { ArtworkOfferOrderByWithAggregationInputObjectSchema } from './objects/ArtworkOfferOrderByWithAggregationInput.schema';
import { ArtworkOfferScalarWhereWithAggregatesInputObjectSchema } from './objects/ArtworkOfferScalarWhereWithAggregatesInput.schema';
import { ArtworkOfferScalarFieldEnumSchema } from './enums/ArtworkOfferScalarFieldEnum.schema';

export const ArtworkOfferGroupBySchema = z.object({
  where: ArtworkOfferWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ArtworkOfferOrderByWithAggregationInputObjectSchema,
      ArtworkOfferOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ArtworkOfferScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ArtworkOfferScalarFieldEnumSchema),
});
