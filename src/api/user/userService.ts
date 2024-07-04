import { StatusCodes } from 'http-status-codes';
import z from 'zod';
import { User, SafeUser } from '@/api/user/userModel';
import { userRepository } from '@/api/user/userRepository';
import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse';
import { logger } from '@/server';
import { auth } from '@/common/utils/authentication';
import {
  RegisterSchema,
  LoginSchema,
  RequestPasswordResetSchema,
  ResetPasswordSchema,
  ConfirmEmailSchema,
} from '@/api/user/userModel';

export const userService = {
  // Retrieves all users from the database
  findAll: async (): Promise<ServiceResponse<SafeUser[] | null>> => {
    try {
      const users = await userRepository.findAllAsync();
      if (!users) {
        return new ServiceResponse(ResponseStatus.Failed, 'No Users found', null, StatusCodes.NOT_FOUND);
      }

      const safeUsers = await users.map((user) => auth.getSafeUser(user));

      return new ServiceResponse<SafeUser[]>(ResponseStatus.Success, 'Users found', safeUsers, StatusCodes.OK);
    } catch (ex) {
      const errorMessage = `Error finding all users: $${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },

  // Retrieves a single user by their ID
  findById: async (id: number): Promise<ServiceResponse<SafeUser | null>> => {
    try {
      const user = await userRepository.findByIdAsync(id);
      if (!user) {
        return new ServiceResponse(ResponseStatus.Failed, 'User not found', null, StatusCodes.NOT_FOUND);
      }
      return new ServiceResponse<SafeUser>(
        ResponseStatus.Success,
        'User found',
        auth.getSafeUser(user),
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = `Error finding user with id ${id}:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },

  // Registers a User
  register: async (data: z.infer<typeof RegisterSchema>): Promise<ServiceResponse<SafeUser | null>> => {
    try {
      const { email, password, name } = data;

      const exitingUser = await userRepository.findUserByEmailAsync(email);
      if (exitingUser) {
        return new ServiceResponse(ResponseStatus.Failed, 'Email already in use', null, StatusCodes.CONFLICT);
      }

      const salt = await auth.generateSalt();
      const hashedPassword = await auth.hashPassword(password, salt);
      const emailConfirmToken = await auth.generateToken();
      const emailConfirmTokenExpiry = await auth.getTokenExpiry();

      const newUser = await userRepository.createAsync({
        email,
        password: hashedPassword,
        salt,
        name,
        age: 0, // Default value for age
        role: 'user', // Default role
        organizationId: null, // Default value for organizationId
        createdAt: new Date(),
        updatedAt: new Date(),
        token: null,
        tokenExpiry: null,
        resetToken: null,
        resetTokenExpiry: null,
        emailConfirmed: false,
        emailConfirmToken,
        emailConfirmTokenExpiry,
        emailConfirmedAt: null,
      });

      if (!newUser) {
        return new ServiceResponse(
          ResponseStatus.Failed,
          'Error creating user',
          null,
          StatusCodes.INTERNAL_SERVER_ERROR
        );
      }

      const emailConfirmUrl = await auth.getConfirmTokenLink(emailConfirmToken);

      // TODO: Send email confirmation email
      // await emailService.sendEmailConfirmation(newUser.email, emailConfirmUrl);

      const safeUser = auth.getSafeUser(newUser);

      return new ServiceResponse<SafeUser>(
        ResponseStatus.Success,
        'User registered, please confirm you email.',
        safeUser,
        StatusCodes.CREATED
      );
    } catch (ex) {
      const errorMessage = `Error creating user: ${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },

  login: async (data: z.infer<typeof LoginSchema>): Promise<ServiceResponse<SafeUser | null>> => {
    const { email, password } = data;

    try {
      const user = await userRepository.findUserByEmailAsync(email);
      if (!user) {
        return new ServiceResponse(ResponseStatus.Failed, 'User not found', null, StatusCodes.NOT_FOUND);
      }

      const isPasswordValid = await auth.verifyPassword(password, user.salt, user.password);
      if (!isPasswordValid) {
        return new ServiceResponse(ResponseStatus.Failed, 'Invalid credentials', null, StatusCodes.UNAUTHORIZED);
      }

      if (!user.emailConfirmed) {
        return new ServiceResponse(
          ResponseStatus.Failed,
          'Oops...Looks like your email is not confirmed. Please check confirmation email and login again.',
          null,
          StatusCodes.UNAUTHORIZED
        );
      }

      const token = await auth.generateToken();
      const tokenExpiry = await auth.getTokenExpiry();

      const updatedUser = await userRepository.updateUserTokenAsync(user.id, token, tokenExpiry);

      if (!updatedUser) {
        return new ServiceResponse(ResponseStatus.Failed, 'Error logging in', null, StatusCodes.INTERNAL_SERVER_ERROR);
      }

      const safeUser = auth.getSafeUser(updatedUser);

      return new ServiceResponse<SafeUser>(ResponseStatus.Success, 'User Login Successful', safeUser, StatusCodes.OK);
    } catch (ex) {
      const errorMessage = `Error logging in: ${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },

  requestPasswordReset: async (
    data: z.infer<typeof RequestPasswordResetSchema>
  ): Promise<ServiceResponse<string | null>> => {
    try {
      const { email } = data;
      const user = await userRepository.findUserByEmailAsync(email);
      if (!user) {
        return new ServiceResponse(ResponseStatus.Failed, 'User not found', null, StatusCodes.NOT_FOUND);
      }

      const resetToken = await auth.generateToken();
      const resetTokenExpiry = await auth.getTokenExpiry();

      const updatedUser = await userRepository.updateUserTokenAsync(user.id, resetToken, resetTokenExpiry);

      if (!updatedUser) {
        return new ServiceResponse(
          ResponseStatus.Failed,
          'Error requesting password reset',
          null,
          StatusCodes.INTERNAL_SERVER_ERROR
        );
      }

      const resetUrl = await auth.getPasswordResetLink(resetToken);

      // TODO: Send password reset email
      // await emailService.sendPasswordReset(user.email, resetUrl);

      return new ServiceResponse<string>(ResponseStatus.Success, 'Password reset requested', resetUrl, StatusCodes.OK);
    } catch (ex) {
      const errorMessage = `Error requesting password reset: ${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },

  resetPassword: async (data: z.infer<typeof ResetPasswordSchema>): Promise<ServiceResponse<SafeUser | null>> => {
    try {
      const { token, newPassword } = data;
      const user = await userRepository.findUserByTokenAsync(token);
      if (!user) {
        return new ServiceResponse(
          ResponseStatus.Failed,
          'Invalid or expired reset token',
          null,
          StatusCodes.UNAUTHORIZED
        );
      }

      const salt = await auth.generateSalt();
      const hashedPassword = await auth.hashPassword(newPassword, salt);

      user.password = hashedPassword;
      user.salt = salt;
      user.resetToken = null;
      user.resetTokenExpiry = null;

      const updatedUser = await userRepository.updateAsync(user.id, user);

      if (!updatedUser) {
        return new ServiceResponse(
          ResponseStatus.Failed,
          'Error resetting password',
          null,
          StatusCodes.INTERNAL_SERVER_ERROR
        );
      }

      const safeUser = auth.getSafeUser(updatedUser);

      return new ServiceResponse<SafeUser>(
        ResponseStatus.Success,
        'Password reset successfully!',
        safeUser,
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = `Error resetting password: ${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },

  confirmEmail: async (data: z.infer<typeof ConfirmEmailSchema>): Promise<ServiceResponse<SafeUser | null>> => {
    try {
      const { emailConfirmToken } = data;
      const user = await userRepository.findUserByTokenAsync(emailConfirmToken);
      if (!user || !user.emailConfirmTokenExpiry || user.emailConfirmTokenExpiry < new Date()) {
        return new ServiceResponse(ResponseStatus.Failed, 'Invalid confirm token', null, StatusCodes.UNAUTHORIZED);
      }

      user.emailConfirmed = true;
      user.emailConfirmToken = null;
      user.emailConfirmTokenExpiry = null;
      user.emailConfirmedAt = new Date();

      const updatedUser = await userRepository.updateAsync(user.id, user);

      if (!updatedUser) {
        return new ServiceResponse(
          ResponseStatus.Failed,
          'Error confirming email',
          null,
          StatusCodes.INTERNAL_SERVER_ERROR
        );
      }

      const safeUser = auth.getSafeUser(updatedUser);

      return new ServiceResponse<SafeUser>(ResponseStatus.Success, 'Email confirmed', safeUser, StatusCodes.OK);
    } catch (ex) {
      const errorMessage = `Error confirming email: ${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },
};
