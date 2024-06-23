import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ArtworkListRelationFilterObjectSchema } from './ArtworkListRelationFilter.schema';
import { ContactListRelationFilterObjectSchema } from './ContactListRelationFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkPrivateViewWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArtworkPrivateViewWhereInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArtworkPrivateViewWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArtworkPrivateViewWhereInputObjectSchema),
        z.lazy(() => ArtworkPrivateViewWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdById: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    artworks: z.lazy(() => ArtworkListRelationFilterObjectSchema).optional(),
    contacts: z.lazy(() => ContactListRelationFilterObjectSchema).optional(),
    createdBy: z
      .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
      .optional(),
  })
  .strict();

export const ArtworkPrivateViewWhereInputObjectSchema = Schema;
