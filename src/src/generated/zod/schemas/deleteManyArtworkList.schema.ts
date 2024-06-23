import { z } from 'zod';
import { ArtworkListWhereInputObjectSchema } from './objects/ArtworkListWhereInput.schema';

export const ArtworkListDeleteManySchema = z.object({ where: ArtworkListWhereInputObjectSchema.optional() });
