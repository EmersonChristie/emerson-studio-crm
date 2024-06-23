import { z } from 'zod';
import { ArtworkCategoryCreateInputObjectSchema } from './objects/ArtworkCategoryCreateInput.schema';
import { ArtworkCategoryUncheckedCreateInputObjectSchema } from './objects/ArtworkCategoryUncheckedCreateInput.schema';

export const ArtworkCategoryCreateOneSchema = z.object({
  data: z.union([ArtworkCategoryCreateInputObjectSchema, ArtworkCategoryUncheckedCreateInputObjectSchema]),
});
