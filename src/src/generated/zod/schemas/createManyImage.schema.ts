import { z } from 'zod';
import { ImageCreateManyInputObjectSchema } from './objects/ImageCreateManyInput.schema';

export const ImageCreateManySchema = z.object({
  data: z.union([ImageCreateManyInputObjectSchema, z.array(ImageCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
});
