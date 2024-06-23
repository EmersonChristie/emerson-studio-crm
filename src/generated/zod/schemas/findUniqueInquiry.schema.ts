import { z } from 'zod';
import { InquiryWhereUniqueInputObjectSchema } from './objects/InquiryWhereUniqueInput.schema';

export const InquiryFindUniqueSchema = z.object({ where: InquiryWhereUniqueInputObjectSchema });
