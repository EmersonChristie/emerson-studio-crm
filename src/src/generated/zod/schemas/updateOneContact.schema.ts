import { z } from 'zod';
import { ContactUpdateInputObjectSchema } from './objects/ContactUpdateInput.schema';
import { ContactUncheckedUpdateInputObjectSchema } from './objects/ContactUncheckedUpdateInput.schema';
import { ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema';

export const ContactUpdateOneSchema = z.object({
  data: z.union([ContactUpdateInputObjectSchema, ContactUncheckedUpdateInputObjectSchema]),
  where: ContactWhereUniqueInputObjectSchema,
});
