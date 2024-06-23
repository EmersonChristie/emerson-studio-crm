import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ContactRelationFilterObjectSchema } from './ContactRelationFilter.schema';
import { ContactWhereInputObjectSchema } from './ContactWhereInput.schema';
import { ArtworkRelationFilterObjectSchema } from './ArtworkRelationFilter.schema';
import { ArtworkWhereInputObjectSchema } from './ArtworkWhereInput.schema';
import { InvoiceRelationFilterObjectSchema } from './InvoiceRelationFilter.schema';
import { InvoiceWhereInputObjectSchema } from './InvoiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => SaleWhereInputObjectSchema), z.lazy(() => SaleWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => SaleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => SaleWhereInputObjectSchema), z.lazy(() => SaleWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    amount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
    date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    contactId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    artworkId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    invoiceId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    paymentStatus: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    contact: z
      .union([z.lazy(() => ContactRelationFilterObjectSchema), z.lazy(() => ContactWhereInputObjectSchema)])
      .optional(),
    artwork: z
      .union([z.lazy(() => ArtworkRelationFilterObjectSchema), z.lazy(() => ArtworkWhereInputObjectSchema)])
      .optional(),
    invoice: z
      .union([z.lazy(() => InvoiceRelationFilterObjectSchema), z.lazy(() => InvoiceWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict();

export const SaleWhereInputObjectSchema = Schema;
