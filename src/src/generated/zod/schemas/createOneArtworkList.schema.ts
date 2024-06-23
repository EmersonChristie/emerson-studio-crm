import { z } from 'zod';
import { ArtworkListCreateInputObjectSchema } from './objects/ArtworkListCreateInput.schema';
import { ArtworkListUncheckedCreateInputObjectSchema } from './objects/ArtworkListUncheckedCreateInput.schema';

export const ArtworkListCreateOneSchema = z.object({
  data: z.union([ArtworkListCreateInputObjectSchema, ArtworkListUncheckedCreateInputObjectSchema]),
});
