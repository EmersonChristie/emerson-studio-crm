import { z } from 'zod';
import { ArtworkOfferWhereInputObjectSchema } from './objects/ArtworkOfferWhereInput.schema';

export const ArtworkOfferDeleteManySchema = z.object({ where: ArtworkOfferWhereInputObjectSchema.optional() });
