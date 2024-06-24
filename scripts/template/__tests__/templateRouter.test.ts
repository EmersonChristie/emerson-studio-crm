import { StatusCodes } from 'http-status-codes';
import request from 'supertest';

import { Template } from '@/api/template/templateModel';
import { templates } from '@/api/template/templateRepository';
import { ServiceResponse } from '@/common/models/serviceResponse';
import { app } from '@/server';

describe('Template API Endpoints', () => {
  describe('GET /templates', () => {
    it('should return a list of templates', async () => {
      // Act
      const response = await request(app).get('/templates');
      const responseBody: ServiceResponse<Template[]> = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.OK);
      expect(responseBody.success).toBeTruthy();
      expect(responseBody.message).toContain('Templates found');
      expect(responseBody.responseObject.length).toEqual(templates.length);
    });
  });

  describe('GET /templates/:id', () => {
    it('should return a template for a valid ID', async () => {
      // Arrange
      const testId = 1;
      const expectedTemplate = templates.find((template: Template) => template.id === testId) as Template;

      // Act
      const response = await request(app).get(`/templates/${testId}`);
      const responseBody: ServiceResponse<Template> = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.OK);
      expect(responseBody.success).toBeTruthy();
      expect(responseBody.message).toContain('Template found');
      if (!expectedTemplate) throw new Error('Invalid test data: expectedTemplate is undefined');
    });

    it('should return a not found error for non-existent ID', async () => {
      // Arrange
      const testId = 214748364; // Maximum value for a 32-bit signed integer

      // Act
      const response = await request(app).get(`/templates/${testId}`);
      const responseBody: ServiceResponse = response.body;

      console.log('Error: ', responseBody);
      console.log('STATUS CODE FROM RESPONSE: ', response.statusCode);

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.NOT_FOUND);
      expect(responseBody.success).toBeFalsy();
      expect(responseBody.message).toContain('Template not found');
      expect(responseBody.responseObject).toBeNull();
    });

    it('should return a bad request for invalid ID format', async () => {
      // Act
      const invalidInput = 'abc';
      const response = await request(app).get(`/templates/${invalidInput}`);
      const responseBody: ServiceResponse = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
      expect(responseBody.success).toBeFalsy();
      expect(responseBody.message).toContain('Invalid input');
      expect(responseBody.responseObject).toBeNull();
    });
  });
});
