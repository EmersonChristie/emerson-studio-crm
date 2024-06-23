import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'organizationId',
  'email',
  'age',
  'role',
  'createdAt',
  'updatedAt',
  'password',
  'salt',
  'token',
  'tokenExpiry',
  'resetToken',
  'resetTokenExpiry',
  'emailConfirmed',
  'emailConfirmToken',
  'emailConfirmTokenExpiry',
  'emailConfirmedAt',
]);
