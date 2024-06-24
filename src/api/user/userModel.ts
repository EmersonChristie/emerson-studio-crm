import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';
import { User as PrismaUser } from '@prisma/client';

import { UserSchema as ZodUserSchema } from '@/common/zod/schemas';

import { commonValidations } from '@/common/utils/commonValidation';

extendZodWithOpenApi(z);

export type User = PrismaUser;

export const UserSchema = ZodUserSchema;

// Input Validation for 'GET users/:id' endpoint
export const GetUserSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});
