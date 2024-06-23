import { z } from 'zod';
import { InquiryWhereUniqueInputObjectSchema } from './objects/InquiryWhereUniqueInput.schema';

export const InquiryDeleteOneSchema = z.object({ where: InquiryWhereUniqueInputObjectSchema });
