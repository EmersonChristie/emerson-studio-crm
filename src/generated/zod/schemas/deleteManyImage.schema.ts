import { z } from 'zod';
import { ImageWhereInputObjectSchema } from './objects/ImageWhereInput.schema';

export const ImageDeleteManySchema = z.object({ where: ImageWhereInputObjectSchema.optional() });
