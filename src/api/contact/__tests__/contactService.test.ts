import { StatusCodes } from 'http-status-codes';
import { Mock } from 'vitest';

import { Contact } from '@/api/contact/contactModel';
import { contactRepository } from '@/api/contact/contactRepository';
import { contactService } from '@/api/contact/contactService';

vi.mock('@/api/contact/contactRepository');
vi.mock('@/server', () => ({
  ...vi.importActual('@/server'),
  logger: {
    error: vi.fn(),
  },
}));

describe('contactService', () => {
  const mockContacts: Contact[] = [
    {
      id: 1,
      firstName: 'Test',
      lastName: 'Contact 1',
      email: 'test.contact1@example.com',
      phone: null,
      createdAt: new Date('2024-06-24T18:56:09.060Z'),
      updatedAt: new Date('2024-06-24T18:56:09.060Z'),
      createdById: 1,
      notes: null,
      source: 'website',
    },
    {
      id: 2,
      firstName: 'Test',
      lastName: 'Contact 2',
      email: 'test.contact2@example.com',
      phone: null,
      createdAt: new Date('2024-06-24T18:56:09.060Z'),
      updatedAt: new Date('2024-06-24T18:56:09.060Z'),
      createdById: 1,
      notes: null,
      source: 'website',
    },
  ];

  describe('findAll', () => {
    it('return all contacts', async () => {
      // Arrange
      (contactRepository.findAllAsync as Mock).mockReturnValue(mockContacts);

      // Act
      const result = await contactService.findAll();

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.OK);
      expect(result.success).toBeTruthy();
      expect(result.message).toContain('Contacts found');
      expect(result.responseObject).toEqual(mockContacts);
    });

    it('returns a not found error for no contacts found', async () => {
      // Arrange
      (contactRepository.findAllAsync as Mock).mockReturnValue(null);

      // Act
      const result = await contactService.findAll();

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.NOT_FOUND);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain('No Contacts found');
      expect(result.responseObject).toBeNull();
    });

    it('handles errors for findAllAsync', async () => {
      // Arrange
      (contactRepository.findAllAsync as Mock).mockRejectedValue(new Error('Database error'));

      // Act
      const result = await contactService.findAll();

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain('Error finding all contacts');
      expect(result.responseObject).toBeNull();
    });
  });

  describe('findById', () => {
    it('returns a contact for a valid ID', async () => {
      // Arrange
      const testId = 1;
      const mockContact = mockContacts.find((contact) => contact.id === testId);
      (contactRepository.findByIdAsync as Mock).mockReturnValue(mockContact);

      // Act
      const result = await contactService.findById(testId);

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.OK);
      expect(result.success).toBeTruthy();
      expect(result.message).toContain('Contact found');
      expect(result.responseObject).toEqual(mockContact);
    });

    it('handles errors for findByIdAsync', async () => {
      // Arrange
      const testId = 1;
      (contactRepository.findByIdAsync as Mock).mockRejectedValue(new Error('Database error'));

      // Act
      const result = await contactService.findById(testId);

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain(`Error finding contact with id ${testId}`);
      expect(result.responseObject).toBeNull();
    });

    it('returns a not found error for non-existent ID', async () => {
      // Arrange
      const testId = 1;
      (contactRepository.findByIdAsync as Mock).mockReturnValue(null);

      // Act
      const result = await contactService.findById(testId);

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.NOT_FOUND);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain('Contact not found');
      expect(result.responseObject).toBeNull();
    });
  });
});
