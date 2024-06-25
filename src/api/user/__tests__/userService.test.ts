import { StatusCodes } from 'http-status-codes';
import { Mock } from 'vitest';

import { User } from '@/api/user/userModel';
import { userRepository } from '@/api/user/userRepository';
import { userService } from '@/api/user/userService';
import {
  RegisterSchema,
  LoginSchema,
  RequestPasswordResetSchema,
  ResetPasswordSchema,
  ConfirmEmailSchema,
} from '@/api/user/userModel';
import { auth } from '@/common/utils/authentication';

const { generateToken, hashPassword, verifyPassword, generateSalt } = auth;

vi.mock('@/api/user/userRepository');
vi.mock('@/server', () => ({
  ...vi.importActual('@/server'),
  logger: {
    error: vi.fn(),
  },
}));

describe('userService', () => {
  const mockUsers: User[] = [
    {
      id: 1,
      name: 'Test Template 1',
      organizationId: null,
      email: 'test.template1@example.com',
      age: 30,
      role: 'USER',
      createdAt: new Date('2024-06-24T18:56:08.845Z'),
      updatedAt: new Date('2024-06-24T18:56:08.845Z'),
      password: 'password123',
      salt: 'testsalt1',
      token: null,
      tokenExpiry: null,
      resetToken: null,
      resetTokenExpiry: null,
      emailConfirmed: false,
      emailConfirmToken: null,
      emailConfirmTokenExpiry: null,
      emailConfirmedAt: null,
    },
    {
      id: 2,
      name: 'Test Template 2',
      organizationId: null,
      email: 'test.template2@example.com',
      age: 35,
      role: 'ADMIN',
      createdAt: new Date('2024-06-24T18:56:08.845Z'),
      updatedAt: new Date('2024-06-24T18:56:08.845Z'),
      password: 'password456',
      salt: 'testsalt2',
      token: null,
      tokenExpiry: null,
      resetToken: null,
      resetTokenExpiry: null,
      emailConfirmed: false,
      emailConfirmToken: null,
      emailConfirmTokenExpiry: null,
      emailConfirmedAt: null,
    },
  ];

  describe('findAll', () => {
    it('return all users', async () => {
      // Arrange
      (userRepository.findAllAsync as Mock).mockReturnValue(mockUsers);

      // Act
      const result = await userService.findAll();

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.OK);
      expect(result.success).toBeTruthy();
      expect(result.message).toContain('Users found');
      expect(result.responseObject).toEqual(mockUsers);
    });

    it('returns a not found error for no users found', async () => {
      // Arrange
      (userRepository.findAllAsync as Mock).mockReturnValue(null);

      // Act
      const result = await userService.findAll();

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.NOT_FOUND);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain('No Users found');
      expect(result.responseObject).toBeNull();
    });

    it('handles errors for findAllAsync', async () => {
      // Arrange
      (userRepository.findAllAsync as Mock).mockRejectedValue(new Error('Database error'));

      // Act
      const result = await userService.findAll();

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain('Error finding all users');
      expect(result.responseObject).toBeNull();
    });
  });

  describe('findById', () => {
    it('returns a user for a valid ID', async () => {
      // Arrange
      const testId = 1;
      const mockUser = mockUsers.find((user) => user.id === testId);
      (userRepository.findByIdAsync as Mock).mockReturnValue(mockUser);

      // Act
      const result = await userService.findById(testId);

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.OK);
      expect(result.success).toBeTruthy();
      expect(result.message).toContain('User found');
      expect(result.responseObject).toEqual(mockUser);
    });

    it('handles errors for findByIdAsync', async () => {
      // Arrange
      const testId = 1;
      (userRepository.findByIdAsync as Mock).mockRejectedValue(new Error('Database error'));

      // Act
      const result = await userService.findById(testId);

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain(`Error finding user with id ${testId}`);
      expect(result.responseObject).toBeNull();
    });

    it('returns a not found error for non-existent ID', async () => {
      // Arrange
      const testId = 1;
      (userRepository.findByIdAsync as Mock).mockReturnValue(null);

      // Act
      const result = await userService.findById(testId);

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.NOT_FOUND);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain('User not found');
      expect(result.responseObject).toBeNull();
    });
  });

  describe('register', () => {
    it('registers a new user', async () => {
      // Arrange
      const userData = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User',
        age: 0,
        role: 'user',
        organizationId: null,
      };
      const mockUser = {
        id: 1,
        ...userData,
        emailConfirmed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        salt: 'salt',
        token: null,
        tokenExpiry: null,
        resetToken: null,
        resetTokenExpiry: null,
        emailConfirmToken: 'mockToken',
        emailConfirmTokenExpiry: new Date(Date.now() + 3600000),
        emailConfirmedAt: null,
      };
      vi.spyOn(userRepository, 'findUserByEmailAsync').mockResolvedValue(null);
      vi.spyOn(userRepository, 'createAsync').mockResolvedValue(mockUser);
      vi.spyOn(auth, 'generateToken').mockResolvedValue('mockToken');
      vi.spyOn(auth, 'hashPassword').mockResolvedValue('hashedPassword');
      vi.spyOn(auth, 'generateSalt').mockResolvedValue('salt');
      vi.spyOn(auth, 'getConfirmTokenLink').mockResolvedValue('http://localhost:3000/confirm/mockToken');

      // Act
      const result = await userService.register(userData);

      // Assert
      expect(result.message).toEqual({ message: 'User registered, please confirm your email' });
      expect(userRepository.findUserByEmailAsync).toHaveBeenCalledWith(userData.email);
      expect(userRepository.createAsync).toHaveBeenCalledWith(
        expect.objectContaining({
          email: userData.email,
          password: 'hashedPassword',
          name: userData.name,
          emailConfirmToken: 'mockToken',
          emailConfirmTokenExpiry: expect.any(Date),
        })
      );
    });

    it('returns error if email already in use', async () => {
      // Arrange
      const userData = {
        id: 1,
        name: 'Test User',
        organizationId: null,
        email: 'test@example.com',
        age: 0,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: 'password123',
        salt: 'salt',
        token: null,
        tokenExpiry: null,
        resetToken: null,
        resetTokenExpiry: null,
        emailConfirmToken: null,
        emailConfirmTokenExpiry: null,
        emailConfirmedAt: null,
        emailConfirmed: false,
      };

      vi.spyOn(userRepository, 'findUserByEmailAsync').mockResolvedValue(userData);

      // Act
      const result = await userService.register(userData);

      // Assert
      expect(result).toEqual({ error: 'Email already in use' });
      expect(userRepository.findUserByEmailAsync).toHaveBeenCalledWith(userData.email);
      expect(userRepository.createAsync).not.toHaveBeenCalled();
    });
  });

  describe('login', () => {
    it('logs in a user with valid credentials', async () => {
      // Arrange
      const loginData = { email: 'test@example.com', password: 'password123' };
      const mockUser = {
        id: 1,
        email: loginData.email,
        name: 'Test User',
        age: 0,
        role: 'user',
        organizationId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        emailConfirmed: true,
        password: 'hashedPassword',
        salt: 'salt',
        token: null,
        tokenExpiry: null,
        resetToken: null,
        resetTokenExpiry: null,
        emailConfirmToken: null,
        emailConfirmTokenExpiry: null,
        emailConfirmedAt: null,
      };
      vi.spyOn(userRepository, 'findUserByEmailAsync').mockResolvedValue(mockUser);
      vi.spyOn(auth, 'verifyPassword').mockResolvedValue(true);
      vi.spyOn(auth, 'generateToken').mockResolvedValue('mockToken');

      // Act
      const result = await userService.login(loginData);

      // Assert
      expect(result).toEqual({ token: 'mockToken' });
      expect(userRepository.findUserByEmailAsync).toHaveBeenCalledWith(loginData.email);
      expect(auth.verifyPassword).toHaveBeenCalledWith(loginData.password, 'salt', 'hashedPassword');
      expect(userRepository.updateUserTokenAsync).toHaveBeenCalledWith(mockUser.id, 'mockToken', expect.any(Date));
    });

    it('returns error for invalid credentials', async () => {
      // Arrange
      const loginData = { email: 'test@example.com', password: 'password123' };
      const mockUser = {
        id: 1,
        email: loginData.email,
        name: 'Test User',
        age: 0,
        role: 'user',
        organizationId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        emailConfirmed: true,
        password: 'hashedPassword',
        salt: 'salt',
        token: null,
        tokenExpiry: null,
        resetToken: null,
        resetTokenExpiry: null,
        emailConfirmToken: null,
        emailConfirmTokenExpiry: null,
        emailConfirmedAt: null,
      };
      vi.spyOn(userRepository, 'findUserByEmailAsync').mockResolvedValue(mockUser);
      vi.spyOn(auth, 'verifyPassword').mockResolvedValue(false);

      // Act
      const result = await userService.login(loginData);

      // Assert
      expect(result).toEqual({ error: 'Invalid email or password' });
      expect(userRepository.findUserByEmailAsync).toHaveBeenCalledWith(loginData.email);
      expect(auth.verifyPassword).toHaveBeenCalledWith(loginData.password, 'salt', 'hashedPassword');
      expect(userRepository.updateUserTokenAsync).not.toHaveBeenCalled();
    });

    it('returns error if email not confirmed', async () => {
      // Arrange
      const loginData = { email: 'test@example.com', password: 'password123' };
      const mockUser = {
        id: 1,
        email: loginData.email,
        name: 'Test User',
        age: 0,
        role: 'user',
        organizationId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        emailConfirmed: false,
        password: 'hashedPassword',
        salt: 'salt',
        token: null,
        tokenExpiry: null,
        resetToken: null,
        resetTokenExpiry: null,
        emailConfirmToken: null,
        emailConfirmTokenExpiry: null,
        emailConfirmedAt: null,
      };
      vi.spyOn(userRepository, 'findUserByEmailAsync').mockResolvedValue(mockUser);

      // Act
      const result = await userService.login(loginData);

      // Assert
      expect(result).toEqual({ error: 'Email not confirmed' });
      expect(userRepository.findUserByEmailAsync).toHaveBeenCalledWith(loginData.email);
      expect(auth.verifyPassword).not.toHaveBeenCalled();
      expect(userRepository.updateUserTokenAsync).not.toHaveBeenCalled();
    });
  });

  describe('requestPasswordReset', () => {
    it('sends a password reset email for a valid email', async () => {
      // Arrange
      const emailData = { email: 'test@example.com' };
      const mockUser = {
        id: 1,
        email: emailData.email,
        name: 'Test User',
        age: 0,
        role: 'user',
        organizationId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        emailConfirmed: true,
        password: 'hashedPassword',
        salt: 'salt',
        token: null,
        tokenExpiry: null,
        resetToken: 'mockToken',
        resetTokenExpiry: new Date(Date.now() + 3600000),
        emailConfirmToken: null,
        emailConfirmTokenExpiry: null,
        emailConfirmedAt: null,
      };
      vi.spyOn(userRepository, 'findUserByEmailAsync').mockResolvedValue(mockUser);
      vi.spyOn(auth, 'generateToken').mockResolvedValue('mockToken');
      vi.spyOn(userRepository, 'updateUserTokenAsync').mockResolvedValue(mockUser);
      vi.spyOn(auth, 'getPasswordResetLink').mockResolvedValue('http://localhost:3000/reset/mockToken');

      // Act
      const result = await userService.requestPasswordReset(emailData);

      // Assert
      expect(result).toEqual({ message: 'Password reset email sent' });
      expect(userRepository.findUserByEmailAsync).toHaveBeenCalledWith(emailData.email);
      expect(auth.generateToken).toHaveBeenCalled();
      expect(userRepository.updateUserTokenAsync).toHaveBeenCalledWith(mockUser.id, 'mockToken', expect.any(Date));
    });

    it('returns error if email not found', async () => {
      // Arrange
      const emailData = { email: 'test@example.com' };
      vi.spyOn(userRepository, 'findUserByEmailAsync').mockResolvedValue(null);

      // Act
      const result = await userService.requestPasswordReset(emailData);

      // Assert
      expect(result).toEqual({ error: 'Email not found' });
      expect(userRepository.findUserByEmailAsync).toHaveBeenCalledWith(emailData.email);
      expect(auth.generateToken).not.toHaveBeenCalled();
      expect(userRepository.updateUserTokenAsync).not.toHaveBeenCalled();
    });
  });

  describe('resetPassword', () => {
    it('resets the password for a valid token', async () => {
      // Arrange
      const resetData = { token: 'mockToken', newPassword: 'newPassword123' };
      const mockUser = {
        id: 1,
        email: 'test@example.com',
        name: 'Test User',
        age: 0,
        role: 'user',
        organizationId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        emailConfirmed: true,
        password: 'hashedPassword',
        salt: 'salt',
        token: null,
        tokenExpiry: null,
        resetToken: 'mockToken',
        resetTokenExpiry: new Date(Date.now() + 3600000),
        emailConfirmToken: null,
        emailConfirmTokenExpiry: null,
        emailConfirmedAt: null,
      };
      vi.spyOn(userRepository, 'findUserByTokenAsync').mockResolvedValue(mockUser);
      vi.spyOn(auth, 'generateSalt').mockResolvedValue('newSalt');
      vi.spyOn(auth, 'hashPassword').mockResolvedValue('newHashedPassword');
      vi.spyOn(userRepository, 'updateAsync').mockResolvedValue(mockUser);

      // Act
      const result = await userService.resetPassword(resetData);

      // Assert
      expect(result).toEqual({ message: 'Password reset successfully' });
      expect(userRepository.findUserByTokenAsync).toHaveBeenCalledWith('mockToken');
      expect(auth.generateSalt).toHaveBeenCalled();
      expect(auth.hashPassword).toHaveBeenCalledWith('newPassword123', 'newSalt');
      expect(userRepository.updateAsync).toHaveBeenCalledWith(mockUser.id, {
        password: 'newHashedPassword',
        salt: 'newSalt',
        resetToken: null,
        resetTokenExpiry: null,
      });
    });

    it('returns error for invalid or expired token', async () => {
      // Arrange
      const resetData = { token: 'mockToken', newPassword: 'newPassword123' };
      vi.spyOn(userRepository, 'findUserByTokenAsync').mockResolvedValue(null);

      // Act
      const result = await userService.resetPassword(resetData);

      // Assert
      expect(result).toEqual({ error: 'Invalid or expired token' });
      expect(userRepository.findUserByTokenAsync).toHaveBeenCalledWith('mockToken');
      expect(auth.generateSalt).not.toHaveBeenCalled();
      expect(auth.hashPassword).not.toHaveBeenCalled();
      expect(userRepository.updateAsync).not.toHaveBeenCalled();
    });
  });

  describe('confirmEmail', () => {
    it('confirms the email for a valid token', async () => {
      // Arrange
      const confirmData = { token: 'mockToken' };
      const mockUser = {
        id: 1,
        email: 'test@example.com',
        name: 'Test User',
        age: 0,
        role: 'user',
        organizationId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        emailConfirmed: true,
        password: 'hashedPassword',
        salt: 'salt',
        token: null,
        tokenExpiry: null,
        resetToken: null,
        resetTokenExpiry: null,
        emailConfirmToken: 'mockToken',
        emailConfirmTokenExpiry: new Date(Date.now() + 3600000),
        emailConfirmedAt: null,
      };
      vi.spyOn(userRepository, 'findUserByTokenAsync').mockResolvedValue(mockUser);
      vi.spyOn(userRepository, 'updateAsync').mockResolvedValue(mockUser);

      // Act
      const result = await userService.confirmEmail(confirmData);

      // Assert
      expect(result).toEqual({ message: 'Email confirmed successfully' });
      expect(userRepository.findUserByTokenAsync).toHaveBeenCalledWith('mockToken');
      expect(userRepository.updateAsync).toHaveBeenCalledWith(mockUser.id, {
        emailConfirmed: true,
        emailConfirmToken: null,
        emailConfirmTokenExpiry: null,
        emailConfirmedAt: expect.any(Date),
      });
    });

    it('returns error for invalid or expired token', async () => {
      // Arrange
      const confirmData = { token: 'mockToken' };
      vi.spyOn(userRepository, 'findUserByTokenAsync').mockResolvedValue(null);

      // Act
      const result = await userService.confirmEmail(confirmData);

      // Assert
      expect(result).toEqual({ error: 'Invalid or expired token' });
      expect(userRepository.findUserByTokenAsync).toHaveBeenCalledWith('mockToken');
      expect(userRepository.updateAsync).not.toHaveBeenCalled();
    });
  });
});
