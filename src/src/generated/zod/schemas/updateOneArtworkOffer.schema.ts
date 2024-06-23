import { z } from 'zod';
import { ArtworkOfferUpdateInputObjectSchema } from './objects/ArtworkOfferUpdateInput.schema';
import { ArtworkOfferUncheckedUpdateInputObjectSchema } from './objects/ArtworkOfferUncheckedUpdateInput.schema';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './objects/ArtworkOfferWhereUniqueInput.schema';

export const ArtworkOfferUpdateOneSchema = z.object({
  data: z.union([ArtworkOfferUpdateInputObjectSchema, ArtworkOfferUncheckedUpdateInputObjectSchema]),
  where: ArtworkOfferWhereUniqueInputObjectSchema,
});
