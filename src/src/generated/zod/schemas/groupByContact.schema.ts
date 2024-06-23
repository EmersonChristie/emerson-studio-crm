import { z } from 'zod';
import { ContactWhereInputObjectSchema } from './objects/ContactWhereInput.schema';
import { ContactOrderByWithAggregationInputObjectSchema } from './objects/ContactOrderByWithAggregationInput.schema';
import { ContactScalarWhereWithAggregatesInputObjectSchema } from './objects/ContactScalarWhereWithAggregatesInput.schema';
import { ContactScalarFieldEnumSchema } from './enums/ContactScalarFieldEnum.schema';

export const ContactGroupBySchema = z.object({
  where: ContactWhereInputObjectSchema.optional(),
  orderBy: z
    .union([ContactOrderByWithAggregationInputObjectSchema, ContactOrderByWithAggregationInputObjectSchema.array()])
    .optional(),
  having: ContactScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ContactScalarFieldEnumSchema),
});
