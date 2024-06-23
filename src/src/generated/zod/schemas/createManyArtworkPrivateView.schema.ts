import { z } from 'zod';
import { ArtworkPrivateViewCreateManyInputObjectSchema } from './objects/ArtworkPrivateViewCreateManyInput.schema';

export const ArtworkPrivateViewCreateManySchema = z.object({
  data: z.union([
    ArtworkPrivateViewCreateManyInputObjectSchema,
    z.array(ArtworkPrivateViewCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
