import { StatusCodes } from 'http-status-codes';

import { Artwork } from '@/api/artwork/artworkModel';
import { artworkRepository } from '@/api/artwork/artworkRepository';
import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse';
import { logger } from '@/server';

export const artworkService = {
  // Retrieves all artworks from the database
  findAll: async (): Promise<ServiceResponse<Artwork[] | null>> => {
    try {
      const artworks = await artworkRepository.findAllAsync();
      if (!artworks) {
        return new ServiceResponse(ResponseStatus.Failed, 'No Artworks found', null, StatusCodes.NOT_FOUND);
      }
      return new ServiceResponse<Artwork[]>(ResponseStatus.Success, 'Artworks found', artworks, StatusCodes.OK);
    } catch (ex) {
      const errorMessage = `Error finding all artworks: $${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },

  // Retrieves a single artwork by their ID
  findById: async (id: number): Promise<ServiceResponse<Artwork | null>> => {
    try {
      const artwork = await artworkRepository.findByIdAsync(id);
      if (!artwork) {
        return new ServiceResponse(ResponseStatus.Failed, 'Artwork not found', null, StatusCodes.NOT_FOUND);
      }
      return new ServiceResponse<Artwork>(ResponseStatus.Success, 'Artwork found', artwork, StatusCodes.OK);
    } catch (ex) {
      const errorMessage = `Error finding artwork with id ${id}:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },
};
