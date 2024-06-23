import { z } from 'zod';
import { InvoiceCreateManyInputObjectSchema } from './objects/InvoiceCreateManyInput.schema';

export const InvoiceCreateManySchema = z.object({
  data: z.union([InvoiceCreateManyInputObjectSchema, z.array(InvoiceCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
});
