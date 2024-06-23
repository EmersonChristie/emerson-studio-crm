import { z } from 'zod';
import { ContactAddressCreateManyInputObjectSchema } from './objects/ContactAddressCreateManyInput.schema';

export const ContactAddressCreateManySchema = z.object({
  data: z.union([ContactAddressCreateManyInputObjectSchema, z.array(ContactAddressCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
});
