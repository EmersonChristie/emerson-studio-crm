import { z } from 'zod';
import { ArtworkListWhereInputObjectSchema } from './ArtworkListWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkListListRelationFilter> = z
  .object({
    every: z.lazy(() => ArtworkListWhereInputObjectSchema).optional(),
    some: z.lazy(() => ArtworkListWhereInputObjectSchema).optional(),
    none: z.lazy(() => ArtworkListWhereInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkListListRelationFilterObjectSchema = Schema;
