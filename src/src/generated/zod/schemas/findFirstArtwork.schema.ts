import { z } from 'zod';
import { ArtworkOrderByWithRelationInputObjectSchema } from './objects/ArtworkOrderByWithRelationInput.schema';
import { ArtworkWhereInputObjectSchema } from './objects/ArtworkWhereInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './objects/ArtworkWhereUniqueInput.schema';
import { ArtworkScalarFieldEnumSchema } from './enums/ArtworkScalarFieldEnum.schema';

export const ArtworkFindFirstSchema = z.object({
  orderBy: z
    .union([ArtworkOrderByWithRelationInputObjectSchema, ArtworkOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: ArtworkWhereInputObjectSchema.optional(),
  cursor: ArtworkWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ArtworkScalarFieldEnumSchema).optional(),
});
