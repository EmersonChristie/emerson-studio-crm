import { Artwork, PostArtworkSchema, ArtworkCreate } from '@/api/artwork/artworkModel';
import prisma from '../../../prisma/client';
import { z } from 'zod';

export const artworks: Artwork[] = await prisma.artwork.findMany();

export const artworkRepository = {
  findAllAsync: async (): Promise<Artwork[]> => {
    return await prisma.artwork.findMany();
  },

  findByIdAsync: async (id: number): Promise<Artwork | null> => {
    return await prisma.artwork.findUnique({ where: { id } });
  },

  createAsync: async (data: ArtworkCreate): Promise<Artwork> => {
    return await prisma.artwork.create({ data });
  },

  updateAsync: async (id: number, artwork: ArtworkCreate): Promise<Artwork | null> => {
    return await prisma.artwork.update({ where: { id }, data: artwork });
  },

  deleteAsync: async (id: number): Promise<Artwork | null> => {
    return await prisma.artwork.delete({ where: { id } });
  },

  bulkUpdateAsync: async (ids: number[], data: ArtworkCreate): Promise<number> => {
    const updatedArtworks = await prisma.artwork.updateMany({ where: { id: { in: ids } }, data });
    return updatedArtworks.count;
  },
};
