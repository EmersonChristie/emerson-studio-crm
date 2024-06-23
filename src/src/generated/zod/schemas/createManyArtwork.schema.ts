import { z } from 'zod';
import { ArtworkCreateManyInputObjectSchema } from './objects/ArtworkCreateManyInput.schema';

export const ArtworkCreateManySchema = z.object({
  data: z.union([ArtworkCreateManyInputObjectSchema, z.array(ArtworkCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
});
