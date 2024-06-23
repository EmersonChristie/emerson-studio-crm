import { z } from 'zod';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './objects/ArtworkOfferWhereUniqueInput.schema';
import { ArtworkOfferCreateInputObjectSchema } from './objects/ArtworkOfferCreateInput.schema';
import { ArtworkOfferUncheckedCreateInputObjectSchema } from './objects/ArtworkOfferUncheckedCreateInput.schema';
import { ArtworkOfferUpdateInputObjectSchema } from './objects/ArtworkOfferUpdateInput.schema';
import { ArtworkOfferUncheckedUpdateInputObjectSchema } from './objects/ArtworkOfferUncheckedUpdateInput.schema';

export const ArtworkOfferUpsertSchema = z.object({
  where: ArtworkOfferWhereUniqueInputObjectSchema,
  create: z.union([ArtworkOfferCreateInputObjectSchema, ArtworkOfferUncheckedCreateInputObjectSchema]),
  update: z.union([ArtworkOfferUpdateInputObjectSchema, ArtworkOfferUncheckedUpdateInputObjectSchema]),
});
