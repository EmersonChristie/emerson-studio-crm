import { z } from 'zod';
import { ArtworkOfferCreateManyInputObjectSchema } from './objects/ArtworkOfferCreateManyInput.schema';

export const ArtworkOfferCreateManySchema = z.object({
  data: z.union([ArtworkOfferCreateManyInputObjectSchema, z.array(ArtworkOfferCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
});
