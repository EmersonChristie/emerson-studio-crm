import { z } from 'zod';
import { ArtworkListUpdateInputObjectSchema } from './objects/ArtworkListUpdateInput.schema';
import { ArtworkListUncheckedUpdateInputObjectSchema } from './objects/ArtworkListUncheckedUpdateInput.schema';
import { ArtworkListWhereUniqueInputObjectSchema } from './objects/ArtworkListWhereUniqueInput.schema';

export const ArtworkListUpdateOneSchema = z.object({
  data: z.union([ArtworkListUpdateInputObjectSchema, ArtworkListUncheckedUpdateInputObjectSchema]),
  where: ArtworkListWhereUniqueInputObjectSchema,
});
