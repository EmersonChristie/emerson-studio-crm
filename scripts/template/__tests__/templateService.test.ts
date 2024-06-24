import { StatusCodes } from 'http-status-codes';
import { Mock } from 'vitest';

import { Template } from '@/api/template/templateModel';
import { templateRepository } from '@/api/template/templateRepository';
import { templateService } from '@/api/template/templateService';

vi.mock('@/api/template/templateRepository');
vi.mock('@/server', () => ({
  ...vi.importActual('@/server'),
  logger: {
    error: vi.fn(),
  },
}));

describe('templateService', () => {
  const mockTemplates: Template[] = [
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
    it('return all templates', async () => {
      // Arrange
      (templateRepository.findAllAsync as Mock).mockReturnValue(mockTemplates);

      // Act
      const result = await templateService.findAll();

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.OK);
      expect(result.success).toBeTruthy();
      expect(result.message).toContain('Templates found');
      expect(result.responseObject).toEqual(mockTemplates);
    });

    it('returns a not found error for no templates found', async () => {
      // Arrange
      (templateRepository.findAllAsync as Mock).mockReturnValue(null);

      // Act
      const result = await templateService.findAll();

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.NOT_FOUND);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain('No Templates found');
      expect(result.responseObject).toBeNull();
    });

    it('handles errors for findAllAsync', async () => {
      // Arrange
      (templateRepository.findAllAsync as Mock).mockRejectedValue(new Error('Database error'));

      // Act
      const result = await templateService.findAll();

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain('Error finding all templates');
      expect(result.responseObject).toBeNull();
    });
  });

  describe('findById', () => {
    it('returns a template for a valid ID', async () => {
      // Arrange
      const testId = 1;
      const mockTemplate = mockTemplates.find((template) => template.id === testId);
      (templateRepository.findByIdAsync as Mock).mockReturnValue(mockTemplate);

      // Act
      const result = await templateService.findById(testId);

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.OK);
      expect(result.success).toBeTruthy();
      expect(result.message).toContain('Template found');
      expect(result.responseObject).toEqual(mockTemplate);
    });

    it('handles errors for findByIdAsync', async () => {
      // Arrange
      const testId = 1;
      (templateRepository.findByIdAsync as Mock).mockRejectedValue(new Error('Database error'));

      // Act
      const result = await templateService.findById(testId);

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain(`Error finding template with id ${testId}`);
      expect(result.responseObject).toBeNull();
    });

    it('returns a not found error for non-existent ID', async () => {
      // Arrange
      const testId = 1;
      (templateRepository.findByIdAsync as Mock).mockReturnValue(null);

      // Act
      const result = await templateService.findById(testId);

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.NOT_FOUND);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain('Template not found');
      expect(result.responseObject).toBeNull();
    });
  });
});
