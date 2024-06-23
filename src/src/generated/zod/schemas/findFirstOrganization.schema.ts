import { z } from 'zod';
import { OrganizationOrderByWithRelationInputObjectSchema } from './objects/OrganizationOrderByWithRelationInput.schema';
import { OrganizationWhereInputObjectSchema } from './objects/OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema } from './objects/OrganizationWhereUniqueInput.schema';
import { OrganizationScalarFieldEnumSchema } from './enums/OrganizationScalarFieldEnum.schema';

export const OrganizationFindFirstSchema = z.object({
  orderBy: z
    .union([OrganizationOrderByWithRelationInputObjectSchema, OrganizationOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: OrganizationWhereInputObjectSchema.optional(),
  cursor: OrganizationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(OrganizationScalarFieldEnumSchema).optional(),
});
