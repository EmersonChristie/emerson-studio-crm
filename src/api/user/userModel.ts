import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';
import { User as PrismaUser } from '@prisma/client';

import { UserSchema as ZodUserSchema } from '@/common/zod/schemas';

import { commonValidations } from '@/common/utils/commonValidation';
import { email } from 'envalid';

extendZodWithOpenApi(z);

export type User = PrismaUser;

export const UserSchema = ZodUserSchema;

// Input Validation for 'GET users/:id' endpoint
export const GetUserSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});

export const LoginSchema = z.object({
  email: commonValidations.email,
  password: commonValidations.password,
});

export const RegisterSchema = z.object({
  name: z.string(),
  email: commonValidations.email,
  password: commonValidations.password,
});

export const RequestPasswordResetSchema = z.object({
  email: commonValidations.email,
});

export const ResetPasswordSchema = z.object({
  newPassword: commonValidations.password,
  token: z.string(),
});

export const ConfirmEmailSchema = z.object({
  token: z.string(),
});
