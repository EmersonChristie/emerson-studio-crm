import { z } from 'zod';
import { ArtworkPrivateViewUpdateManyMutationInputObjectSchema } from './objects/ArtworkPrivateViewUpdateManyMutationInput.schema';
import { ArtworkPrivateViewWhereInputObjectSchema } from './objects/ArtworkPrivateViewWhereInput.schema';

export const ArtworkPrivateViewUpdateManySchema = z.object({
  data: ArtworkPrivateViewUpdateManyMutationInputObjectSchema,
  where: ArtworkPrivateViewWhereInputObjectSchema.optional(),
});
