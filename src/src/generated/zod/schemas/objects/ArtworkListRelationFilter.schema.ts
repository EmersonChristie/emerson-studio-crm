import { z } from 'zod';
import { ArtworkWhereInputObjectSchema } from './ArtworkWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkListRelationFilter> = z
  .object({
    every: z.lazy(() => ArtworkWhereInputObjectSchema).optional(),
    some: z.lazy(() => ArtworkWhereInputObjectSchema).optional(),
    none: z.lazy(() => ArtworkWhereInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkListRelationFilterObjectSchema = Schema;
