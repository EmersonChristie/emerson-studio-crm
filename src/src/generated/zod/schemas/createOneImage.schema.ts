import { z } from 'zod';
import { ImageCreateInputObjectSchema } from './objects/ImageCreateInput.schema';
import { ImageUncheckedCreateInputObjectSchema } from './objects/ImageUncheckedCreateInput.schema';

export const ImageCreateOneSchema = z.object({
  data: z.union([ImageCreateInputObjectSchema, ImageUncheckedCreateInputObjectSchema]),
});
