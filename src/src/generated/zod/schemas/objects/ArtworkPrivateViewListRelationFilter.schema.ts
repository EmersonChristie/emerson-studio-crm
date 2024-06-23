import { z } from 'zod';
import { ArtworkPrivateViewWhereInputObjectSchema } from './ArtworkPrivateViewWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewListRelationFilter> = z
  .object({
    every: z.lazy(() => ArtworkPrivateViewWhereInputObjectSchema).optional(),
    some: z.lazy(() => ArtworkPrivateViewWhereInputObjectSchema).optional(),
    none: z.lazy(() => ArtworkPrivateViewWhereInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkPrivateViewListRelationFilterObjectSchema = Schema;
