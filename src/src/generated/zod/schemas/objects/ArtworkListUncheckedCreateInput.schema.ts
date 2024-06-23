import { z } from 'zod';
import { ArtworkUncheckedCreateNestedManyWithoutListsInputObjectSchema } from './ArtworkUncheckedCreateNestedManyWithoutListsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkListUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artworks: z.lazy(() => ArtworkUncheckedCreateNestedManyWithoutListsInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkListUncheckedCreateInputObjectSchema = Schema;
