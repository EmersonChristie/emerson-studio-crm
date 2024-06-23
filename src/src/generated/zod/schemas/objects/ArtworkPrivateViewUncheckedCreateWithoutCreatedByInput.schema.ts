import { z } from 'zod';
import { ArtworkUncheckedCreateNestedManyWithoutPrivateViewsInputObjectSchema } from './ArtworkUncheckedCreateNestedManyWithoutPrivateViewsInput.schema';
import { ContactUncheckedCreateNestedManyWithoutPrivateViewsInputObjectSchema } from './ContactUncheckedCreateNestedManyWithoutPrivateViewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewUncheckedCreateWithoutCreatedByInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    url: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artworks: z.lazy(() => ArtworkUncheckedCreateNestedManyWithoutPrivateViewsInputObjectSchema).optional(),
    contacts: z.lazy(() => ContactUncheckedCreateNestedManyWithoutPrivateViewsInputObjectSchema).optional(),
  })
  .strict();

export const ArtworkPrivateViewUncheckedCreateWithoutCreatedByInputObjectSchema = Schema;
