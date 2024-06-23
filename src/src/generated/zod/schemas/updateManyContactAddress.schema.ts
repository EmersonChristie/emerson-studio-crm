import { z } from 'zod';
import { ContactAddressUpdateManyMutationInputObjectSchema } from './objects/ContactAddressUpdateManyMutationInput.schema';
import { ContactAddressWhereInputObjectSchema } from './objects/ContactAddressWhereInput.schema';

export const ContactAddressUpdateManySchema = z.object({
  data: ContactAddressUpdateManyMutationInputObjectSchema,
  where: ContactAddressWhereInputObjectSchema.optional(),
});
