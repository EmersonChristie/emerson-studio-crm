import { z } from 'zod';
import { ArtworkCreateNestedManyWithoutListsInputObjectSchema } from './ArtworkCreateNestedManyWithoutListsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkListCreateInput> = z
  .object({
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artworks: z.lazy(() => ArtworkCreateNestedManyWithoutListsInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkListCreateInputObjectSchema = Schema;
