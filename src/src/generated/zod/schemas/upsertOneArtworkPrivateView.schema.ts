import { z } from 'zod';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './objects/ArtworkPrivateViewWhereUniqueInput.schema';
import { ArtworkPrivateViewCreateInputObjectSchema } from './objects/ArtworkPrivateViewCreateInput.schema';
import { ArtworkPrivateViewUncheckedCreateInputObjectSchema } from './objects/ArtworkPrivateViewUncheckedCreateInput.schema';
import { ArtworkPrivateViewUpdateInputObjectSchema } from './objects/ArtworkPrivateViewUpdateInput.schema';
import { ArtworkPrivateViewUncheckedUpdateInputObjectSchema } from './objects/ArtworkPrivateViewUncheckedUpdateInput.schema';

export const ArtworkPrivateViewUpsertSchema = z.object({
  where: ArtworkPrivateViewWhereUniqueInputObjectSchema,
  create: z.union([ArtworkPrivateViewCreateInputObjectSchema, ArtworkPrivateViewUncheckedCreateInputObjectSchema]),
  update: z.union([ArtworkPrivateViewUpdateInputObjectSchema, ArtworkPrivateViewUncheckedUpdateInputObjectSchema]),
});
