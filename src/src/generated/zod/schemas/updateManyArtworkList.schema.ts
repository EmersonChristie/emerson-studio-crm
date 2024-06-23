import { z } from 'zod';
import { ArtworkListUpdateManyMutationInputObjectSchema } from './objects/ArtworkListUpdateManyMutationInput.schema';
import { ArtworkListWhereInputObjectSchema } from './objects/ArtworkListWhereInput.schema';

export const ArtworkListUpdateManySchema = z.object({
  data: ArtworkListUpdateManyMutationInputObjectSchema,
  where: ArtworkListWhereInputObjectSchema.optional(),
});
