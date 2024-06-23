import { z } from 'zod';
import { ArtworkOfferWhereUniqueInputObjectSchema } from './objects/ArtworkOfferWhereUniqueInput.schema';

export const ArtworkOfferFindUniqueSchema = z.object({ where: ArtworkOfferWhereUniqueInputObjectSchema });
