import { z } from 'zod';
import { ArtworkCreateNestedManyWithoutPrivateViewsInputObjectSchema } from './ArtworkCreateNestedManyWithoutPrivateViewsInput.schema';
import { ContactCreateNestedManyWithoutPrivateViewsInputObjectSchema } from './ContactCreateNestedManyWithoutPrivateViewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewCreateWithoutCreatedByInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
    url: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artworks: z.lazy(() => ArtworkCreateNestedManyWithoutPrivateViewsInputObjectSchema).optional(),
    contacts: z.lazy(() => ContactCreateNestedManyWithoutPrivateViewsInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkPrivateViewCreateWithoutCreatedByInputObjectSchema = Schema;
