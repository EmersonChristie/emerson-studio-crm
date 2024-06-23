import { z } from 'zod';
import { ArtworkOfferCreateInputObjectSchema } from './objects/ArtworkOfferCreateInput.schema';
import { ArtworkOfferUncheckedCreateInputObjectSchema } from './objects/ArtworkOfferUncheckedCreateInput.schema';

export const ArtworkOfferCreateOneSchema = z.object({
  data: z.union([ArtworkOfferCreateInputObjectSchema, ArtworkOfferUncheckedCreateInputObjectSchema]),
});
