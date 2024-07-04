import bcrypt from 'bcrypt';
import crypto from 'crypto';
import path from 'path';
import { SafeUser, User } from '@/api/user/userModel';

const url =
  (process.env.NODE_ENV === 'production' ? process.env.PROD_FRONTEND_URL : process.env.DEV_FRONTEND_URL) ||
  'http://localhost:3000';

export const auth = {
  generateToken: async (): Promise<string> => {
    return crypto.randomBytes(20).toString('hex');
  },

  generateSalt: async (): Promise<string> => {
    return bcrypt.genSalt();
  },

  hashPassword: async (password: string, salt: string): Promise<string> => {
    const hashedPassword = await bcrypt.hash(password + salt, 10);
    return hashedPassword;
  },

  verifyPassword: async (password: string, salt: string, hashedPassword: string): Promise<boolean> => {
    const isMatch = await bcrypt.compare(password + salt, hashedPassword);
    return isMatch;
  },

  getTokenExpiry: async (): Promise<Date> => {
    const now = new Date();
    return new Date(now.setHours(now.getHours() + 1)); // 1 hour from now
  },

  getConfirmTokenLink: async (token: string): Promise<string> => {
    return path.join(url, 'confirm', token);
  },

  getPasswordResetLink: async (token: string): Promise<string> => {
    return path.join(url, 'reset', token);
  },

  getSafeUser: (user: User): SafeUser => {
    const { password, salt, resetToken, resetTokenExpiry, emailConfirmToken, emailConfirmTokenExpiry, ...safeUser } =
      user;
    return safeUser;
  },
};