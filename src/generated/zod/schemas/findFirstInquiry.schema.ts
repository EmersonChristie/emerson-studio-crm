import { z } from 'zod';
import { InquiryOrderByWithRelationInputObjectSchema } from './objects/InquiryOrderByWithRelationInput.schema';
import { InquiryWhereInputObjectSchema } from './objects/InquiryWhereInput.schema';
import { InquiryWhereUniqueInputObjectSchema } from './objects/InquiryWhereUniqueInput.schema';
import { InquiryScalarFieldEnumSchema } from './enums/InquiryScalarFieldEnum.schema';

export const InquiryFindFirstSchema = z.object({
  orderBy: z
    .union([InquiryOrderByWithRelationInputObjectSchema, InquiryOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: InquiryWhereInputObjectSchema.optional(),
  cursor: InquiryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(InquiryScalarFieldEnumSchema).optional(),
});
