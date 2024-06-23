import { z } from 'zod';
import { ContactAddressCreateInputObjectSchema } from './objects/ContactAddressCreateInput.schema';
import { ContactAddressUncheckedCreateInputObjectSchema } from './objects/ContactAddressUncheckedCreateInput.schema';

export const ContactAddressCreateOneSchema = z.object({
  data: z.union([ContactAddressCreateInputObjectSchema, ContactAddressUncheckedCreateInputObjectSchema]),
});
