import { z } from 'zod';
import { ContactOrderByWithRelationInputObjectSchema } from './objects/ContactOrderByWithRelationInput.schema';
import { ContactWhereInputObjectSchema } from './objects/ContactWhereInput.schema';
import { ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema';
import { ContactScalarFieldEnumSchema } from './enums/ContactScalarFieldEnum.schema';

export const ContactFindFirstSchema = z.object({
  orderBy: z
    .union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: ContactWhereInputObjectSchema.optional(),
  cursor: ContactWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ContactScalarFieldEnumSchema).optional(),
});
