import { z } from 'zod';
import { ArtworkWhereInputObjectSchema } from './objects/ArtworkWhereInput.schema';

export const ArtworkDeleteManySchema = z.object({ where: ArtworkWhereInputObjectSchema.optional() });
