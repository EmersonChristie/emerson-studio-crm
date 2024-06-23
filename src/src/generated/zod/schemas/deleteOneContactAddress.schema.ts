import { z } from 'zod';
import { ContactAddressWhereUniqueInputObjectSchema } from './objects/ContactAddressWhereUniqueInput.schema';

export const ContactAddressDeleteOneSchema = z.object({ where: ContactAddressWhereUniqueInputObjectSchema });
