import { z } from 'zod';
import { ArtworkWhereInputObjectSchema } from './objects/ArtworkWhereInput.schema';
import { ArtworkOrderByWithAggregationInputObjectSchema } from './objects/ArtworkOrderByWithAggregationInput.schema';
import { ArtworkScalarWhereWithAggregatesInputObjectSchema } from './objects/ArtworkScalarWhereWithAggregatesInput.schema';
import { ArtworkScalarFieldEnumSchema } from './enums/ArtworkScalarFieldEnum.schema';

export const ArtworkGroupBySchema = z.object({
  where: ArtworkWhereInputObjectSchema.optional(),
  orderBy: z
    .union([ArtworkOrderByWithAggregationInputObjectSchema, ArtworkOrderByWithAggregationInputObjectSchema.array()])
    .optional(),
  having: ArtworkScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ArtworkScalarFieldEnumSchema),
});
