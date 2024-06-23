import { z } from 'zod';
import { ArtworkUncheckedCreateNestedManyWithoutPrivateViewsInputObjectSchema } from './ArtworkUncheckedCreateNestedManyWithoutPrivateViewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUncheckedCreateWithoutContactsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    url: z.string(),
    createdById: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artworks: z.lazy(() => ArtworkUncheckedCreateNestedManyWithoutPrivateViewsInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkPrivateViewUncheckedCreateWithoutContactsInputObjectSchema = Schema;
