import { z } from 'zod';
import { ContactUpdateManyMutationInputObjectSchema } from './objects/ContactUpdateManyMutationInput.schema';
import { ContactWhereInputObjectSchema } from './objects/ContactWhereInput.schema';

export const ContactUpdateManySchema = z.object({
  data: ContactUpdateManyMutationInputObjectSchema,
  where: ContactWhereInputObjectSchema.optional(),
});
