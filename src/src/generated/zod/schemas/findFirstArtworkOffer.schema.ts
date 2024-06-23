import { z } from 'zod';
import { ArtworkOfferOrderByWithRelationInputObjectSchema } from './objects/ArtworkOfferOrderByWithRelationInput.schema';
import { ArtworkOfferWhereInputObjectSchema } from './objects/ArtworkOfferWhereInput.schema';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './objects/ArtworkOfferWhereUniqueInput.schema';
import { ArtworkOfferScalarFieldEnumSchema } from './enums/ArtworkOfferScalarFieldEnum.schema';

export const ArtworkOfferFindFirstSchema = z.object({
  orderBy: z
    .union([ArtworkOfferOrderByWithRelationInputObjectSchema, ArtworkOfferOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: ArtworkOfferWhereInputObjectSchema.optional(),
  cursor: ArtworkOfferWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ArtworkOfferScalarFieldEnumSchema).optional(),
});
