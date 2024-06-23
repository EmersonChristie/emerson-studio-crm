import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ContactListRelationFilterObjectSchema } from './ContactListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EmailCampaignWhereInputObjectSchema),
        z.lazy(() => EmailCampaignWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EmailCampaignWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EmailCampaignWhereInputObjectSchema),
        z.lazy(() => EmailCampaignWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    subject: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    sentAt: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    status: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    template: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    contacts: z.lazy(() => ContactListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const EmailCampaignWhereInputObjectSchema = Schema;
