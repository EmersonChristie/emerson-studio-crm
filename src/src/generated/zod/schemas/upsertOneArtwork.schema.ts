import { z } from 'zod';
import { ArtworkWhereUniqueInputObjectSchema } from './objects/ArtworkWhereUniqueInput.schema';
import { ArtworkCreateInputObjectSchema } from './objects/ArtworkCreateInput.schema';
import { ArtworkUncheckedCreateInputObjectSchema } from './objects/ArtworkUncheckedCreateInput.schema';
import { ArtworkUpdateInputObjectSchema } from './objects/ArtworkUpdateInput.schema';
import { ArtworkUncheckedUpdateInputObjectSchema } from './objects/ArtworkUncheckedUpdateInput.schema';

export const ArtworkUpsertSchema = z.object({
  where: ArtworkWhereUniqueInputObjectSchema,
  create: z.union([ArtworkCreateInputObjectSchema, ArtworkUncheckedCreateInputObjectSchema]),
  update: z.union([ArtworkUpdateInputObjectSchema, ArtworkUncheckedUpdateInputObjectSchema]),
});
