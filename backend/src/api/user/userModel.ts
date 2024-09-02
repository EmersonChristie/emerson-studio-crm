import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';
// import { User as PrismaUser } from '@prisma/client';
import { User as PrismaUser } from '@shared/types';
import { UserSchema as ZodUserSchema } from '@/common/zod/schemas';

import { commonValidations } from '@/common/utils/commonValidation';
import { email } from 'envalid';

extendZodWithOpenApi(z);

export const UserSchema = ZodUserSchema;

export type User = PrismaUser;

export type SafeUser = Omit<
  User,
  'password' | 'salt' | 'resetToken' | 'resetTokenExpiry' | 'emailConfirmToken' | 'emailConfirmTokenExpiry'
>;

export const SafeUserSchema = z.object({
  id: commonValidations.id,
  name: z.string(),
  email: commonValidations.email,
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Input Validation for 'GET users/:id' endpoint
export const GetUserSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});

export const LoginSchema = z.object({
  email: commonValidations.email,
  password: commonValidations.password,
});

export const PostLoginSchema = z.object({
  body: LoginSchema,
});

export const RegisterSchema = z.object({
  name: z.string(),
  email: commonValidations.email,
  password: commonValidations.password,
});

// Input Validation for 'POST users/register' endpoint
export const PostRegisterSchema = z.object({
  body: RegisterSchema,
});

export const RequestPasswordResetSchema = z.object({
  email: commonValidations.email,
});

export const PostRequestPasswordResetSchema = z.object({
  body: RequestPasswordResetSchema,
});

export const ResetPasswordSchema = z.object({
  newPassword: commonValidations.password,
  token: z.string(),
});

export const PostResetPasswordSchema = z.object({
  body: ResetPasswordSchema,
});

export const ConfirmEmailSchema = z.object({
  emailConfirmToken: z.string(),
});

export const PostConfirmEmailSchema = z.object({
  body: ConfirmEmailSchema,
});
