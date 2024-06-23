import { z } from 'zod';
import { ArtworkListOrderByWithRelationInputObjectSchema } from './objects/ArtworkListOrderByWithRelationInput.schema';
import { ArtworkListWhereInputObjectSchema } from './objects/ArtworkListWhereInput.schema';
import { ArtworkListWhereUniqueInputObjectSchema } from './objects/ArtworkListWhereUniqueInput.schema';
import { ArtworkListScalarFieldEnumSchema } from './enums/ArtworkListScalarFieldEnum.schema';

export const ArtworkListFindManySchema = z.object({
  orderBy: z
    .union([ArtworkListOrderByWithRelationInputObjectSchema, ArtworkListOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: ArtworkListWhereInputObjectSchema.optional(),
  cursor: ArtworkListWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ArtworkListScalarFieldEnumSchema).optional(),
});
