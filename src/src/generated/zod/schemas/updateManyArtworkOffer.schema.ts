import { z } from 'zod';
import { ArtworkOfferUpdateManyMutationInputObjectSchema } from './objects/ArtworkOfferUpdateManyMutationInput.schema';
import { ArtworkOfferWhereInputObjectSchema } from './objects/ArtworkOfferWhereInput.schema';

export const ArtworkOfferUpdateManySchema = z.object({
  data: ArtworkOfferUpdateManyMutationInputObjectSchema,
  where: ArtworkOfferWhereInputObjectSchema.optional(),
});
