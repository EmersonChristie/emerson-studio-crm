import { z } from 'zod';
import { ArtworkCategoryWhereUniqueInputObjectSchema } from './objects/ArtworkCategoryWhereUniqueInput.schema';
import { ArtworkCategoryCreateInputObjectSchema } from './objects/ArtworkCategoryCreateInput.schema';
import { ArtworkCategoryUncheckedCreateInputObjectSchema } from './objects/ArtworkCategoryUncheckedCreateInput.schema';
import { ArtworkCategoryUpdateInputObjectSchema } from './objects/ArtworkCategoryUpdateInput.schema';
import { ArtworkCategoryUncheckedUpdateInputObjectSchema } from './objects/ArtworkCategoryUncheckedUpdateInput.schema';

export const ArtworkCategoryUpsertSchema = z.object({
  where: ArtworkCategoryWhereUniqueInputObjectSchema,
  create: z.union([ArtworkCategoryCreateInputObjectSchema, ArtworkCategoryUncheckedCreateInputObjectSchema]),
  update: z.union([ArtworkCategoryUpdateInputObjectSchema, ArtworkCategoryUncheckedUpdateInputObjectSchema]),
});
