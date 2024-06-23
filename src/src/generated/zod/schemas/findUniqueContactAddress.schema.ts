import { z } from 'zod';
import { ContactAddressWhereUniqueInputObjectSchema } from './objects/ContactAddressWhereUniqueInput.schema';

export const ContactAddressFindUniqueSchema = z.object({ where: ContactAddressWhereUniqueInputObjectSchema });
