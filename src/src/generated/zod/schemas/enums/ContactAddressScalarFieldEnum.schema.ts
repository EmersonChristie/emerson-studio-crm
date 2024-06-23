import { z } from 'zod';

export const ContactAddressScalarFieldEnumSchema = z.enum(['id', 'street', 'city', 'state', 'zip', 'contactId']);
