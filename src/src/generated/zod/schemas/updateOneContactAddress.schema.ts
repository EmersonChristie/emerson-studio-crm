import { z } from 'zod';
import { ContactAddressUpdateInputObjectSchema } from './objects/ContactAddressUpdateInput.schema';
import { ContactAddressUncheckedUpdateInputObjectSchema } from './objects/ContactAddressUncheckedUpdateInput.schema';
import { ContactAddressWhereUniqueInputObjectSchema } from './objects/ContactAddressWhereUniqueInput.schema';

export const ContactAddressUpdateOneSchema = z.object({
  data: z.union([ContactAddressUpdateInputObjectSchema, ContactAddressUncheckedUpdateInputObjectSchema]),
  where: ContactAddressWhereUniqueInputObjectSchema,
});
