import { z } from 'zod';
import { ImageUpdateManyMutationInputObjectSchema } from './objects/ImageUpdateManyMutationInput.schema';
import { ImageWhereInputObjectSchema } from './objects/ImageWhereInput.schema';

export const ImageUpdateManySchema = z.object({
  data: ImageUpdateManyMutationInputObjectSchema,
  where: ImageWhereInputObjectSchema.optional(),
});
