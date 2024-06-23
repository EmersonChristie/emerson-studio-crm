import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { SaleListRelationFilterObjectSchema } from './SaleListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => InvoiceWhereInputObjectSchema), z.lazy(() => InvoiceWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => InvoiceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => InvoiceWhereInputObjectSchema), z.lazy(() => InvoiceWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    total: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
    issuedDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    dueDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    status: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    paymentUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    tax: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    discount: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    sales: z.lazy(() => SaleListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const InvoiceWhereInputObjectSchema = Schema;
