import { z } from 'zod';
import { ArtworkUpdateManyMutationInputObjectSchema } from './objects/ArtworkUpdateManyMutationInput.schema';
import { ArtworkWhereInputObjectSchema } from './objects/ArtworkWhereInput.schema';

export const ArtworkUpdateManySchema = z.object({
  data: ArtworkUpdateManyMutationInputObjectSchema,
  where: ArtworkWhereInputObjectSchema.optional(),
});
