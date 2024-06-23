import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ContactRelationFilterObjectSchema } from './ContactRelationFilter.schema';
import { ContactWhereInputObjectSchema } from './ContactWhereInput.schema';
import { ArtworkRelationFilterObjectSchema } from './ArtworkRelationFilter.schema';
import { ArtworkWhereInputObjectSchema } from './ArtworkWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtworkOfferWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArtworkOfferWhereInputObjectSchema),
        z.lazy(() => ArtworkOfferWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArtworkOfferWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArtworkOfferWhereInputObjectSchema),
        z.lazy(() => ArtworkOfferWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    amount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
    discount: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    message: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    contactId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    artworkId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    contact: z
      .union([z.lazy(() => ContactRelationFilterObjectSchema), z.lazy(() => ContactWhereInputObjectSchema)])
      .optional(),
    artwork: z
      .union([z.lazy(() => ArtworkRelationFilterObjectSchema), z.lazy(() => ArtworkWhereInputObjectSchema)])
      .optional(),
  })
  .strict();

export const ArtworkOfferWhereInputObjectSchema = Schema;
