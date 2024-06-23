import { z } from 'zod';
import { ImageUpdateInputObjectSchema } from './objects/ImageUpdateInput.schema';
import { ImageUncheckedUpdateInputObjectSchema } from './objects/ImageUncheckedUpdateInput.schema';
import { ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';

export const ImageUpdateOneSchema = z.object({
  data: z.union([ImageUpdateInputObjectSchema, ImageUncheckedUpdateInputObjectSchema]),
  where: ImageWhereUniqueInputObjectSchema,
});
