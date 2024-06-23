import { z } from 'zod';
import { ArtworkPrivateViewUpdateInputObjectSchema } from './objects/ArtworkPrivateViewUpdateInput.schema';
import { ArtworkPrivateViewUncheckedUpdateInputObjectSchema } from './objects/ArtworkPrivateViewUncheckedUpdateInput.schema';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './objects/ArtworkPrivateViewWhereUniqueInput.schema';

export const ArtworkPrivateViewUpdateOneSchema = z.object({
  data: z.union([ArtworkPrivateViewUpdateInputObjectSchema, ArtworkPrivateViewUncheckedUpdateInputObjectSchema]),
  where: ArtworkPrivateViewWhereUniqueInputObjectSchema,
});
