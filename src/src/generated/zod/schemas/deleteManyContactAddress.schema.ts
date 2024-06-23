import { z } from 'zod';
import { ContactAddressWhereInputObjectSchema } from './objects/ContactAddressWhereInput.schema';

export const ContactAddressDeleteManySchema = z.object({ where: ContactAddressWhereInputObjectSchema.optional() });
