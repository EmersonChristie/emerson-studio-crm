import { z } from 'zod';
import { ArtworkCategoryUpdateInputObjectSchema } from './objects/ArtworkCategoryUpdateInput.schema';
import { ArtworkCategoryUncheckedUpdateInputObjectSchema } from './objects/ArtworkCategoryUncheckedUpdateInput.schema';
import { ArtworkCategoryWhereUniqueInputObjectSchema } from './objects/ArtworkCategoryWhereUniqueInput.schema';

export const ArtworkCategoryUpdateOneSchema = z.object({
  data: z.union([ArtworkCategoryUpdateInputObjectSchema, ArtworkCategoryUncheckedUpdateInputObjectSchema]),
  where: ArtworkCategoryWhereUniqueInputObjectSchema,
});
