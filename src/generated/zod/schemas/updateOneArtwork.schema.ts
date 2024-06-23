import { z } from 'zod';
import { ArtworkUpdateInputObjectSchema } from './objects/ArtworkUpdateInput.schema';
import { ArtworkUncheckedUpdateInputObjectSchema } from './objects/ArtworkUncheckedUpdateInput.schema';
import { ArtworkWhereUniqueInputObjectSchema } from './objects/ArtworkWhereUniqueInput.schema';

export const ArtworkUpdateOneSchema = z.object({
  data: z.union([ArtworkUpdateInputObjectSchema, ArtworkUncheckedUpdateInputObjectSchema]),
  where: ArtworkWhereUniqueInputObjectSchema,
});
