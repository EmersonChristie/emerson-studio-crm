import { z } from 'zod';
import { ArtworkCreateInputObjectSchema } from './objects/ArtworkCreateInput.schema';
import { ArtworkUncheckedCreateInputObjectSchema } from './objects/ArtworkUncheckedCreateInput.schema';

export const ArtworkCreateOneSchema = z.object({
  data: z.union([ArtworkCreateInputObjectSchema, ArtworkUncheckedCreateInputObjectSchema]),
});
