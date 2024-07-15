import { StatusCodes } from 'http-status-codes';

import { Artwork, ArtworkCreate } from '@/api/artwork/artworkModel';
import { artworkRepository } from '@/api/artwork/artworkRepository';
import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse';
import { logger } from '@/server';
import { z } from 'zod';

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

  // Creates a new artwork
  create: async (data: ArtworkCreate): Promise<ServiceResponse<Artwork | null>> => {
    try {
      const newArtwork = await artworkRepository.createAsync(data);
      return new ServiceResponse<Artwork>(ResponseStatus.Success, 'Artwork created', newArtwork, StatusCodes.CREATED);
    } catch (ex) {
      const errorMessage = `Error creating artwork: ${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },

  // Updates an existing artwork
  update: async (id: number, artwork: ArtworkCreate): Promise<ServiceResponse<Artwork | null>> => {
    try {
      const updatedArtwork = await artworkRepository.updateAsync(id, artwork);
      if (!updatedArtwork) {
        return new ServiceResponse(ResponseStatus.Failed, 'Artwork not found', null, StatusCodes.NOT_FOUND);
      }
      return new ServiceResponse<Artwork>(ResponseStatus.Success, 'Artwork updated', updatedArtwork, StatusCodes.OK);
    } catch (ex) {
      const errorMessage = `Error updating artwork with id ${id}: ${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },

  // Deletes an existing artwork
  delete: async (id: number): Promise<ServiceResponse<Artwork | null>> => {
    try {
      const deletedArtwork = await artworkRepository.deleteAsync(id);
      if (!deletedArtwork) {
        return new ServiceResponse(ResponseStatus.Failed, 'Artwork not found', null, StatusCodes.NOT_FOUND);
      }
      return new ServiceResponse<Artwork>(ResponseStatus.Success, 'Artwork deleted', deletedArtwork, StatusCodes.OK);
    } catch (ex) {
      const errorMessage = `Error deleting artwork with id ${id}: ${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },

  // Updates multiple artworks
  bulkUpdate: async (ids: number[], data: ArtworkCreate): Promise<ServiceResponse<number | null>> => {
    try {
      const updatedArtworksCount = await artworkRepository.bulkUpdateAsync(ids, data);
      return new ServiceResponse<number>(
        ResponseStatus.Success,
        `${updatedArtworksCount} Artworks updated`,
        updatedArtworksCount,
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = `Error updating artworks: ${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },
};
