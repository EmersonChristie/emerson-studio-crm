import { z } from 'zod';
import { ContactUncheckedCreateNestedManyWithoutPrivateViewsInputObjectSchema } from './ContactUncheckedCreateNestedManyWithoutPrivateViewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUncheckedCreateWithoutArtworksInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    url: z.string(),
    createdById: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    contacts: z.lazy(() => ContactUncheckedCreateNestedManyWithoutPrivateViewsInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkPrivateViewUncheckedCreateWithoutArtworksInputObjectSchema = Schema;
