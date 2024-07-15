import { StatusCodes } from 'http-status-codes';
import request from 'supertest';

import { Artwork } from '@/api/artwork/artworkModel';
import { artworks } from '@/api/artwork/artworkRepository';
import { ServiceResponse } from '@/common/models/serviceResponse';
import { app } from '@/server';

describe('Artwork API Endpoints', () => {
  describe('GET /artworks', () => {
    it('should return a list of artworks', async () => {
      // Act
      const response = await request(app).get('/artworks');
      const responseBody: ServiceResponse<Artwork[]> = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.OK);
      expect(responseBody.success).toBeTruthy();
      expect(responseBody.message).toContain('Artworks found');
      expect(responseBody.responseObject.length).toEqual(artworks.length);
    });
  });

  describe('GET /artworks/:id', () => {
    it('should return a artwork for a valid ID', async () => {
      // Arrange
      const testId = 1;
      const expectedArtwork = artworks.find((artwork: Artwork) => artwork.id === testId) as Artwork;

      // Act
      const response = await request(app).get(`/artworks/${testId}`);
      const responseBody: ServiceResponse<Artwork> = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.OK);
      expect(responseBody.success).toBeTruthy();
      expect(responseBody.message).toContain('Artwork found');
      if (!expectedArtwork) throw new Error('Invalid test data: expectedArtwork is undefined');
    });

    it('should return a not found error for non-existent ID', async () => {
      // Arrange
      const testId = 214748364; // Maximum value for a 32-bit signed integer

      // Act
      const response = await request(app).get(`/artworks/${testId}`);
      const responseBody: ServiceResponse = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.NOT_FOUND);
      expect(responseBody.success).toBeFalsy();
      expect(responseBody.message).toContain('Artwork not found');
      expect(responseBody.responseObject).toBeNull();
    });

    it('should return a bad request for invalid ID format', async () => {
      // Act
      const invalidInput = 'abc';
      const response = await request(app).get(`/artworks/${invalidInput}`);
      const responseBody: ServiceResponse = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
      expect(responseBody.success).toBeFalsy();
      expect(responseBody.message).toContain('Invalid input');
      expect(responseBody.responseObject).toBeNull();
    });
  });
});
