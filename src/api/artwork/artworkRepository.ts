import { Artwork } from '@/api/artwork/artworkModel';
import prisma from '../../../prisma/client';

export const artworks: Artwork[] = await prisma.artwork.findMany();

export const artworkRepository = {
  findAllAsync: async (): Promise<Artwork[]> => {
    return await prisma.artwork.findMany();
  },

  findByIdAsync: async (id: number): Promise<Artwork | null> => {
    return await prisma.artwork.findUnique({ where: { id } });
  },
};
