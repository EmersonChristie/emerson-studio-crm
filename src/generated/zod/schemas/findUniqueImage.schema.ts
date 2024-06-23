import { z } from 'zod';
import { ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';

export const ImageFindUniqueSchema = z.object({ where: ImageWhereUniqueInputObjectSchema });
