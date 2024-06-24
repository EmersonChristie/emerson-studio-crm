import { StatusCodes } from 'http-status-codes';
import { Mock } from 'vitest';

import { Artwork } from '@/api/artwork/artworkModel';
import { artworkRepository } from '@/api/artwork/artworkRepository';
import { artworkService } from '@/api/artwork/artworkService';

vi.mock('@/api/artwork/artworkRepository');
vi.mock('@/server', () => ({
  ...vi.importActual('@/server'),
  logger: {
    error: vi.fn(),
  },
}));

describe('artworkService', () => {
  const mockArtworks: Artwork[] = [
    {
      id: 1,
      title: 'Test Artwork 1',
      description: 'Description for Test Artwork 1',
      price: 100,
      createdAt: new Date('2024-06-24T18:56:08.995Z'),
      updatedAt: new Date('2024-06-24T18:56:08.995Z'),
      artist: 'Test Artist 1',
      status: 'available',
      mainImageId: null,
      createdById: 1,
    },
    {
      id: 2,
      title: 'Test Artwork 2',
      description: 'Description for Test Artwork 2',
      price: 200,
      createdAt: new Date('2024-06-24T18:56:08.995Z'),
      updatedAt: new Date('2024-06-24T18:56:08.995Z'),
      artist: 'Test Artist 2',
      status: 'available',
      mainImageId: null,
      createdById: 1,
    },
  ];

  describe('findAll', () => {
    it('return all artworks', async () => {
      // Arrange
      (artworkRepository.findAllAsync as Mock).mockReturnValue(mockArtworks);

      // Act
      const result = await artworkService.findAll();

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.OK);
      expect(result.success).toBeTruthy();
      expect(result.message).toContain('Artworks found');
      expect(result.responseObject).toEqual(mockArtworks);
    });

    it('returns a not found error for no artworks found', async () => {
      // Arrange
      (artworkRepository.findAllAsync as Mock).mockReturnValue(null);

      // Act
      const result = await artworkService.findAll();

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.NOT_FOUND);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain('No Artworks found');
      expect(result.responseObject).toBeNull();
    });

    it('handles errors for findAllAsync', async () => {
      // Arrange
      (artworkRepository.findAllAsync as Mock).mockRejectedValue(new Error('Database error'));

      // Act
      const result = await artworkService.findAll();

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain('Error finding all artworks');
      expect(result.responseObject).toBeNull();
    });
  });

  describe('findById', () => {
    it('returns a artwork for a valid ID', async () => {
      // Arrange
      const testId = 1;
      const mockArtwork = mockArtworks.find((artwork) => artwork.id === testId);
      (artworkRepository.findByIdAsync as Mock).mockReturnValue(mockArtwork);

      // Act
      const result = await artworkService.findById(testId);

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.OK);
      expect(result.success).toBeTruthy();
      expect(result.message).toContain('Artwork found');
      expect(result.responseObject).toEqual(mockArtwork);
    });

    it('handles errors for findByIdAsync', async () => {
      // Arrange
      const testId = 1;
      (artworkRepository.findByIdAsync as Mock).mockRejectedValue(new Error('Database error'));

      // Act
      const result = await artworkService.findById(testId);

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain(`Error finding artwork with id ${testId}`);
      expect(result.responseObject).toBeNull();
    });

    it('returns a not found error for non-existent ID', async () => {
      // Arrange
      const testId = 1;
      (artworkRepository.findByIdAsync as Mock).mockReturnValue(null);

      // Act
      const result = await artworkService.findById(testId);

      // Assert
      expect(result.statusCode).toEqual(StatusCodes.NOT_FOUND);
      expect(result.success).toBeFalsy();
      expect(result.message).toContain('Artwork not found');
      expect(result.responseObject).toBeNull();
    });
  });
});
