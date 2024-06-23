import { z } from 'zod';
import { ArtworkPrivateViewWhereInputObjectSchema } from './objects/ArtworkPrivateViewWhereInput.schema';

export const ArtworkPrivateViewDeleteManySchema = z.object({
  where: ArtworkPrivateViewWhereInputObjectSchema.optional(),
});
