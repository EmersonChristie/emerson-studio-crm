import { StatusCodes } from 'http-status-codes';
import request from 'supertest';

import { Contact } from '@/api/contact/contactModel';
import { contacts } from '@/api/contact/contactRepository';
import { ServiceResponse } from '@/common/models/serviceResponse';
import { app } from '@/server';

describe('Contact API Endpoints', () => {
  describe('GET /contacts', () => {
    it('should return a list of contacts', async () => {
      // Act
      const response = await request(app).get('/contacts');
      const responseBody: ServiceResponse<Contact[]> = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.OK);
      expect(responseBody.success).toBeTruthy();
      expect(responseBody.message).toContain('Contacts found');
      expect(responseBody.responseObject.length).toEqual(contacts.length);
    });
  });

  describe('GET /contacts/:id', () => {
    it('should return a contact for a valid ID', async () => {
      // Arrange
      const testId = 1;
      const expectedContact = contacts.find((contact: Contact) => contact.id === testId) as Contact;

      // Act
      const response = await request(app).get(`/contacts/${testId}`);
      const responseBody: ServiceResponse<Contact> = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.OK);
      expect(responseBody.success).toBeTruthy();
      expect(responseBody.message).toContain('Contact found');
      if (!expectedContact) throw new Error('Invalid test data: expectedContact is undefined');
    });

    it('should return a not found error for non-existent ID', async () => {
      // Arrange
      const testId = 214748364; // Maximum value for a 32-bit signed integer

      // Act
      const response = await request(app).get(`/contacts/${testId}`);
      const responseBody: ServiceResponse = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.NOT_FOUND);
      expect(responseBody.success).toBeFalsy();
      expect(responseBody.message).toContain('Contact not found');
      expect(responseBody.responseObject).toBeNull();
    });

    it('should return a bad request for invalid ID format', async () => {
      // Act
      const invalidInput = 'abc';
      const response = await request(app).get(`/contacts/${invalidInput}`);
      const responseBody: ServiceResponse = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
      expect(responseBody.success).toBeFalsy();
      expect(responseBody.message).toContain('Invalid input');
      expect(responseBody.responseObject).toBeNull();
    });
  });
});
