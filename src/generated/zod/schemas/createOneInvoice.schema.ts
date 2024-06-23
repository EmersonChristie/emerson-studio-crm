import { z } from 'zod';
import { InvoiceCreateInputObjectSchema } from './objects/InvoiceCreateInput.schema';
import { InvoiceUncheckedCreateInputObjectSchema } from './objects/InvoiceUncheckedCreateInput.schema';

export const InvoiceCreateOneSchema = z.object({
  data: z.union([InvoiceCreateInputObjectSchema, InvoiceUncheckedCreateInputObjectSchema]),
});
