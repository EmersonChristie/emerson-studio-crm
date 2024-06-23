import { z } from 'zod';
import { ArtworkListCreateManyInputObjectSchema } from './objects/ArtworkListCreateManyInput.schema';

export const ArtworkListCreateManySchema = z.object({
  data: z.union([ArtworkListCreateManyInputObjectSchema, z.array(ArtworkListCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
});
