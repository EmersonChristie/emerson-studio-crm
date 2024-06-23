import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './objects/ArtworkWhereUniqueInput.schema';

export const ArtworkDeleteOneSchema = z.object({ where: ArtworkWhereUniqueInputObjectSchema });
