import { z } from 'zod';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './objects/ArtworkOfferWhereUniqueInput.schema';

export const ArtworkOfferDeleteOneSchema = z.object({ where: ArtworkOfferWhereUniqueInputObjectSchema });
