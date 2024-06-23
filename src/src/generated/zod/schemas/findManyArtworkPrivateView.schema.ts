import { z } from 'zod';
import { ArtworkPrivateViewOrderByWithRelationInputObjectSchema } from './objects/ArtworkPrivateViewOrderByWithRelationInput.schema';
import { ArtworkPrivateViewWhereInputObjectSchema } from './objects/ArtworkPrivateViewWhereInput.schema';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './objects/ArtworkPrivateViewWhereUniqueInput.schema';
import { ArtworkPrivateViewScalarFieldEnumSchema } from './enums/ArtworkPrivateViewScalarFieldEnum.schema';

export const ArtworkPrivateViewFindManySchema = z.object({
  orderBy: z
    .union([
      ArtworkPrivateViewOrderByWithRelationInputObjectSchema,
      ArtworkPrivateViewOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ArtworkPrivateViewWhereInputObjectSchema.optional(),
  cursor: ArtworkPrivateViewWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ArtworkPrivateViewScalarFieldEnumSchema).optional(),
});
