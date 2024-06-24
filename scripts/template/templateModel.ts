import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';
import { Template as PrismaTemplate } from '@prisma/client';

import { TemplateSchema as ZodTemplateSchema } from '@/common/zod/schemas';

import { commonValidations } from '@/common/utils/commonValidation';

extendZodWithOpenApi(z);

export type Template = PrismaTemplate;

export const TemplateSchema = ZodTemplateSchema;

// Input Validation for 'GET templates/:id' endpoint
export const GetTemplateSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});
