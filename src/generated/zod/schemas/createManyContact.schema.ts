import { z } from 'zod';
import { ContactCreateManyInputObjectSchema } from './objects/ContactCreateManyInput.schema';

export const ContactCreateManySchema = z.object({
  data: z.union([ContactCreateManyInputObjectSchema, z.array(ContactCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
});
