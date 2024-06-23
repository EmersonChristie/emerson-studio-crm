import { z } from 'zod';
import { ContactAddressOrderByWithRelationInputObjectSchema } from './objects/ContactAddressOrderByWithRelationInput.schema';
import { ContactAddressWhereInputObjectSchema } from './objects/ContactAddressWhereInput.schema';
import { ContactAddressWhereUniqueInputObjectSchema } from './objects/ContactAddressWhereUniqueInput.schema';
import { ContactAddressCountAggregateInputObjectSchema } from './objects/ContactAddressCountAggregateInput.schema';
import { ContactAddressMinAggregateInputObjectSchema } from './objects/ContactAddressMinAggregateInput.schema';
import { ContactAddressMaxAggregateInputObjectSchema } from './objects/ContactAddressMaxAggregateInput.schema';
import { ContactAddressAvgAggregateInputObjectSchema } from './objects/ContactAddressAvgAggregateInput.schema';
import { ContactAddressSumAggregateInputObjectSchema } from './objects/ContactAddressSumAggregateInput.schema';

export const ContactAddressAggregateSchema = z.object({
  orderBy: z
    .union([
      ContactAddressOrderByWithRelationInputObjectSchema,
      ContactAddressOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ContactAddressWhereInputObjectSchema.optional(),
  cursor: ContactAddressWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), ContactAddressCountAggregateInputObjectSchema]).optional(),
  _min: ContactAddressMinAggregateInputObjectSchema.optional(),
  _max: ContactAddressMaxAggregateInputObjectSchema.optional(),
  _avg: ContactAddressAvgAggregateInputObjectSchema.optional(),
  _sum: ContactAddressSumAggregateInputObjectSchema.optional(),
});
