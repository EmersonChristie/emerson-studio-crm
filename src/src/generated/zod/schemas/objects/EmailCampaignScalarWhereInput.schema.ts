import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmailCampaignScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EmailCampaignScalarWhereInputObjectSchema),
        z.lazy(() => EmailCampaignScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EmailCampaignScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EmailCampaignScalarWhereInputObjectSchema),
        z.lazy(() => EmailCampaignScalarWhereInputObjectSchema).array(),
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
    createdById: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    status: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    template: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const EmailCampaignScalarWhereInputObjectSchema = Schema;
