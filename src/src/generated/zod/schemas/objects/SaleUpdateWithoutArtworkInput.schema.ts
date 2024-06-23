import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ContactUpdateOneRequiredWithoutSalesNestedInputObjectSchema } from './ContactUpdateOneRequiredWithoutSalesNestedInput.schema';
import { InvoiceUpdateOneWithoutSalesNestedInputObjectSchema } from './InvoiceUpdateOneWithoutSalesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateWithoutArtworkInput> = z
  .object({
    amount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    paymentStatus: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    contact: z.lazy(() => ContactUpdateOneRequiredWithoutSalesNestedInputObjectSchema).optional(),
    invoice: z.lazy(() => InvoiceUpdateOneWithoutSalesNestedInputObjectSchema).optional(),
  })
  .strict();

export const SaleUpdateWithoutArtworkInputObjectSchema = Schema;
