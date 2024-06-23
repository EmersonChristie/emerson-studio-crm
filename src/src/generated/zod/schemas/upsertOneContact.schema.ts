import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema';
import { ContactCreateInputObjectSchema } from './objects/ContactCreateInput.schema';
import { ContactUncheckedCreateInputObjectSchema } from './objects/ContactUncheckedCreateInput.schema';
import { ContactUpdateInputObjectSchema } from './objects/ContactUpdateInput.schema';
import { ContactUncheckedUpdateInputObjectSchema } from './objects/ContactUncheckedUpdateInput.schema';

export const ContactUpsertSchema = z.object({
  where: ContactWhereUniqueInputObjectSchema,
  create: z.union([ContactCreateInputObjectSchema, ContactUncheckedCreateInputObjectSchema]),
  update: z.union([ContactUpdateInputObjectSchema, ContactUncheckedUpdateInputObjectSchema]),
});
