import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema';

export const ContactFindUniqueSchema = z.object({ where: ContactWhereUniqueInputObjectSchema });
