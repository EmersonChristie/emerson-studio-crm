import { z } from 'zod';
import { ArtworkListWhereUniqueInputObjectSchema } from './objects/ArtworkListWhereUniqueInput.schema';
import { ArtworkListCreateInputObjectSchema } from './objects/ArtworkListCreateInput.schema';
import { ArtworkListUncheckedCreateInputObjectSchema } from './objects/ArtworkListUncheckedCreateInput.schema';
import { ArtworkListUpdateInputObjectSchema } from './objects/ArtworkListUpdateInput.schema';
import { ArtworkListUncheckedUpdateInputObjectSchema } from './objects/ArtworkListUncheckedUpdateInput.schema';

export const ArtworkListUpsertSchema = z.object({
  where: ArtworkListWhereUniqueInputObjectSchema,
  create: z.union([ArtworkListCreateInputObjectSchema, ArtworkListUncheckedCreateInputObjectSchema]),
  update: z.union([ArtworkListUpdateInputObjectSchema, ArtworkListUncheckedUpdateInputObjectSchema]),
});
