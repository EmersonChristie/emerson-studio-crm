import { z } from 'zod';
import { ArtworkCategoryOrderByWithRelationInputObjectSchema } from './objects/ArtworkCategoryOrderByWithRelationInput.schema';
import { ArtworkCategoryWhereInputObjectSchema } from './objects/ArtworkCategoryWhereInput.schema';
import { ArtworkCategoryWhereUniqueInputObjectSchema } from './objects/ArtworkCategoryWhereUniqueInput.schema';
import { ArtworkCategoryScalarFieldEnumSchema } from './enums/ArtworkCategoryScalarFieldEnum.schema';

export const ArtworkCategoryFindFirstSchema = z.object({
  orderBy: z
    .union([
      ArtworkCategoryOrderByWithRelationInputObjectSchema,
      ArtworkCategoryOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ArtworkCategoryWhereInputObjectSchema.optional(),
  cursor: ArtworkCategoryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ArtworkCategoryScalarFieldEnumSchema).optional(),
});
