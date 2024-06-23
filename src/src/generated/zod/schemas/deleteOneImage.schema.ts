import { z } from 'zod';
import { ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';

export const ImageDeleteOneSchema = z.object({ where: ImageWhereUniqueInputObjectSchema });
