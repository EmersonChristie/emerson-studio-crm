import { z } from 'zod';
import { InvoiceOrderByWithRelationInputObjectSchema } from './objects/InvoiceOrderByWithRelationInput.schema';
import { InvoiceWhereInputObjectSchema } from './objects/InvoiceWhereInput.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema';
import { InvoiceScalarFieldEnumSchema } from './enums/InvoiceScalarFieldEnum.schema';

export const InvoiceFindFirstSchema = z.object({
  orderBy: z
    .union([InvoiceOrderByWithRelationInputObjectSchema, InvoiceOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: InvoiceWhereInputObjectSchema.optional(),
  cursor: InvoiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(InvoiceScalarFieldEnumSchema).optional(),
});
