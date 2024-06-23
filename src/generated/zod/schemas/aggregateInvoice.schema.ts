import { z } from 'zod';
import { InvoiceOrderByWithRelationInputObjectSchema } from './objects/InvoiceOrderByWithRelationInput.schema';
import { InvoiceWhereInputObjectSchema } from './objects/InvoiceWhereInput.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema';
import { InvoiceCountAggregateInputObjectSchema } from './objects/InvoiceCountAggregateInput.schema';
import { InvoiceMinAggregateInputObjectSchema } from './objects/InvoiceMinAggregateInput.schema';
import { InvoiceMaxAggregateInputObjectSchema } from './objects/InvoiceMaxAggregateInput.schema';
import { InvoiceAvgAggregateInputObjectSchema } from './objects/InvoiceAvgAggregateInput.schema';
import { InvoiceSumAggregateInputObjectSchema } from './objects/InvoiceSumAggregateInput.schema';

export const InvoiceAggregateSchema = z.object({
  orderBy: z
    .union([InvoiceOrderByWithRelationInputObjectSchema, InvoiceOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: InvoiceWhereInputObjectSchema.optional(),
  cursor: InvoiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), InvoiceCountAggregateInputObjectSchema]).optional(),
  _min: InvoiceMinAggregateInputObjectSchema.optional(),
  _max: InvoiceMaxAggregateInputObjectSchema.optional(),
  _avg: InvoiceAvgAggregateInputObjectSchema.optional(),
  _sum: InvoiceSumAggregateInputObjectSchema.optional(),
});
