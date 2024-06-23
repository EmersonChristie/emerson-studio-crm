import { z } from 'zod';
import { ArtworkCategoryCreateManyInputObjectSchema } from './objects/ArtworkCategoryCreateManyInput.schema';

export const ArtworkCategoryCreateManySchema = z.object({
  data: z.union([ArtworkCategoryCreateManyInputObjectSchema, z.array(ArtworkCategoryCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
});
