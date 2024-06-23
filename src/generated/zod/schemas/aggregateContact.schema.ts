import { z } from 'zod';
import { ContactOrderByWithRelationInputObjectSchema } from './objects/ContactOrderByWithRelationInput.schema';
import { ContactWhereInputObjectSchema } from './objects/ContactWhereInput.schema';
import { ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema';
import { ContactCountAggregateInputObjectSchema } from './objects/ContactCountAggregateInput.schema';
import { ContactMinAggregateInputObjectSchema } from './objects/ContactMinAggregateInput.schema';
import { ContactMaxAggregateInputObjectSchema } from './objects/ContactMaxAggregateInput.schema';
import { ContactAvgAggregateInputObjectSchema } from './objects/ContactAvgAggregateInput.schema';
import { ContactSumAggregateInputObjectSchema } from './objects/ContactSumAggregateInput.schema';

export const ContactAggregateSchema = z.object({
  orderBy: z
    .union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: ContactWhereInputObjectSchema.optional(),
  cursor: ContactWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), ContactCountAggregateInputObjectSchema]).optional(),
  _min: ContactMinAggregateInputObjectSchema.optional(),
  _max: ContactMaxAggregateInputObjectSchema.optional(),
  _avg: ContactAvgAggregateInputObjectSchema.optional(),
  _sum: ContactSumAggregateInputObjectSchema.optional(),
});
