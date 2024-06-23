import { z } from 'zod';
import { ArtworkCreateNestedManyWithoutPrivateViewsInputObjectSchema } from './ArtworkCreateNestedManyWithoutPrivateViewsInput.schema';
import { ContactCreateNestedManyWithoutPrivateViewsInputObjectSchema } from './ContactCreateNestedManyWithoutPrivateViewsInput.schema';
import { UserCreateNestedOneWithoutPrivateViewsInputObjectSchema } from './UserCreateNestedOneWithoutPrivateViewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewCreateInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
    url: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    artworks: z.lazy(() => ArtworkCreateNestedManyWithoutPrivateViewsInputObjectSchema).optional(),
    contacts: z.lazy(() => ContactCreateNestedManyWithoutPrivateViewsInputObjectSchema).optional(),
    createdBy: z.lazy(() => UserCreateNestedOneWithoutPrivateViewsInputObjectSchema),
  })
  .strict();

export const ArtworkPrivateViewCreateInputObjectSchema = Schema;
