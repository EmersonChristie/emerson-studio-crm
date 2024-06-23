import { z } from 'zod';
import { ArtworkPrivateViewCreateInputObjectSchema } from './objects/ArtworkPrivateViewCreateInput.schema';
import { ArtworkPrivateViewUncheckedCreateInputObjectSchema } from './objects/ArtworkPrivateViewUncheckedCreateInput.schema';

export const ArtworkPrivateViewCreateOneSchema = z.object({
  data: z.union([ArtworkPrivateViewCreateInputObjectSchema, ArtworkPrivateViewUncheckedCreateInputObjectSchema]),
});
