import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';
import { Contact as PrismaContact } from '@prisma/client';

import { ContactSchema as ZodContactSchema } from '@/common/zod/schemas';

import { commonValidations } from '@/common/utils/commonValidation';

extendZodWithOpenApi(z);

export type Contact = PrismaContact;

export const ContactSchema = ZodContactSchema;

// Input Validation for 'GET contacts/:id' endpoint
export const GetContactSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});
