import { z } from 'zod';
import { ContactAddressWhereUniqueInputObjectSchema } from './objects/ContactAddressWhereUniqueInput.schema';
import { ContactAddressCreateInputObjectSchema } from './objects/ContactAddressCreateInput.schema';
import { ContactAddressUncheckedCreateInputObjectSchema } from './objects/ContactAddressUncheckedCreateInput.schema';
import { ContactAddressUpdateInputObjectSchema } from './objects/ContactAddressUpdateInput.schema';
import { ContactAddressUncheckedUpdateInputObjectSchema } from './objects/ContactAddressUncheckedUpdateInput.schema';

export const ContactAddressUpsertSchema = z.object({
  where: ContactAddressWhereUniqueInputObjectSchema,
  create: z.union([ContactAddressCreateInputObjectSchema, ContactAddressUncheckedCreateInputObjectSchema]),
  update: z.union([ContactAddressUpdateInputObjectSchema, ContactAddressUncheckedUpdateInputObjectSchema]),
});
