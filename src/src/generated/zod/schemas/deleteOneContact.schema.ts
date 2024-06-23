import { z } from 'zod';
import { ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema';

export const ContactDeleteOneSchema = z.object({ where: ContactWhereUniqueInputObjectSchema });
