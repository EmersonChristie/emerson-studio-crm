import { z } from 'zod';
import { ContactWhereInputObjectSchema } from './objects/ContactWhereInput.schema';

export const ContactDeleteManySchema = z.object({ where: ContactWhereInputObjectSchema.optional() });
