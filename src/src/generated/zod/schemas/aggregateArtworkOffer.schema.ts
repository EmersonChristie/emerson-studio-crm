import { z } from 'zod';
import { ArtworkOfferOrderByWithRelationInputObjectSchema } from './objects/ArtworkOfferOrderByWithRelationInput.schema';
import { ArtworkOfferWhereInputObjectSchema } from './objects/ArtworkOfferWhereInput.schema';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './objects/ArtworkOfferWhereUniqueInput.schema';
import { ArtworkOfferCountAggregateInputObjectSchema } from './objects/ArtworkOfferCountAggregateInput.schema';
import { ArtworkOfferMinAggregateInputObjectSchema } from './objects/ArtworkOfferMinAggregateInput.schema';
import { ArtworkOfferMaxAggregateInputObjectSchema } from './objects/ArtworkOfferMaxAggregateInput.schema';
import { ArtworkOfferAvgAggregateInputObjectSchema } from './objects/ArtworkOfferAvgAggregateInput.schema';
import { ArtworkOfferSumAggregateInputObjectSchema } from './objects/ArtworkOfferSumAggregateInput.schema';

export const ArtworkOfferAggregateSchema = z.object({
  orderBy: z
    .union([ArtworkOfferOrderByWithRelationInputObjectSchema, ArtworkOfferOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: ArtworkOfferWhereInputObjectSchema.optional(),
  cursor: ArtworkOfferWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), ArtworkOfferCountAggregateInputObjectSchema]).optional(),
  _min: ArtworkOfferMinAggregateInputObjectSchema.optional(),
  _max: ArtworkOfferMaxAggregateInputObjectSchema.optional(),
  _avg: ArtworkOfferAvgAggregateInputObjectSchema.optional(),
  _sum: ArtworkOfferSumAggregateInputObjectSchema.optional(),
});
