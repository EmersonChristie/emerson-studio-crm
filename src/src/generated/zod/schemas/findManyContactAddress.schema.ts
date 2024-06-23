import { z } from 'zod';
import { ContactAddressOrderByWithRelationInputObjectSchema } from './objects/ContactAddressOrderByWithRelationInput.schema';
import { ContactAddressWhereInputObjectSchema } from './objects/ContactAddressWhereInput.schema';
import { ContactAddressWhereUniqueInputObjectSchema } from './objects/ContactAddressWhereUniqueInput.schema';
import { ContactAddressScalarFieldEnumSchema } from './enums/ContactAddressScalarFieldEnum.schema';

export const ContactAddressFindManySchema = z.object({
  orderBy: z
    .union([
      ContactAddressOrderByWithRelationInputObjectSchema,
      ContactAddressOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ContactAddressWhereInputObjectSchema.optional(),
  cursor: ContactAddressWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ContactAddressScalarFieldEnumSchema).optional(),
});
