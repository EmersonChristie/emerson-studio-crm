import { z } from 'zod';
import { ArtworkCategoryUpdateManyMutationInputObjectSchema } from './objects/ArtworkCategoryUpdateManyMutationInput.schema';
import { ArtworkCategoryWhereInputObjectSchema } from './objects/ArtworkCategoryWhereInput.schema';

export const ArtworkCategoryUpdateManySchema = z.object({
  data: ArtworkCategoryUpdateManyMutationInputObjectSchema,
  where: ArtworkCategoryWhereInputObjectSchema.optional(),
});
