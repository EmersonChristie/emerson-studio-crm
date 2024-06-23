import { z } from 'zod';
import { InquiryWhereInputObjectSchema } from './objects/InquiryWhereInput.schema';

export const InquiryDeleteManySchema = z.object({ where: InquiryWhereInputObjectSchema.optional() });
