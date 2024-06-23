import { z } from 'zod';
import { ContactAddressWhereInputObjectSchema } from './objects/ContactAddressWhereInput.schema';
import { ContactAddressOrderByWithAggregationInputObjectSchema } from './objects/ContactAddressOrderByWithAggregationInput.schema';
import { ContactAddressScalarWhereWithAggregatesInputObjectSchema } from './objects/ContactAddressScalarWhereWithAggregatesInput.schema';
import { ContactAddressScalarFieldEnumSchema } from './enums/ContactAddressScalarFieldEnum.schema';

export const ContactAddressGroupBySchema = z.object({
  where: ContactAddressWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ContactAddressOrderByWithAggregationInputObjectSchema,
      ContactAddressOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ContactAddressScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ContactAddressScalarFieldEnumSchema),
});
