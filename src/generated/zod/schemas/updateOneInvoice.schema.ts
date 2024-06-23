import { z } from 'zod';
import { InvoiceUpdateInputObjectSchema } from './objects/InvoiceUpdateInput.schema';
import { InvoiceUncheckedUpdateInputObjectSchema } from './objects/InvoiceUncheckedUpdateInput.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema';

export const InvoiceUpdateOneSchema = z.object({
  data: z.union([InvoiceUpdateInputObjectSchema, InvoiceUncheckedUpdateInputObjectSchema]),
  where: InvoiceWhereUniqueInputObjectSchema,
});
