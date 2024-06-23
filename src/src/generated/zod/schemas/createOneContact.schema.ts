import { z } from 'zod';
import { ContactCreateInputObjectSchema } from './objects/ContactCreateInput.schema';
import { ContactUncheckedCreateInputObjectSchema } from './objects/ContactUncheckedCreateInput.schema';

export const ContactCreateOneSchema = z.object({
  data: z.union([ContactCreateInputObjectSchema, ContactUncheckedCreateInputObjectSchema]),
});
