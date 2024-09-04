import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';
// import { Prisma, Artwork as PrismaArtwork } from '@prisma/client';
import { Artwork as PrismaArtwork } from '@shared/types';
import { prismaTypeToZod } from '@/common/zod/prismaToZod';

import { ArtworkSchema as ZodArtworkSchema } from '@/common/zod/schemas';

import { commonValidations } from '@/common/utils/commonValidation';

extendZodWithOpenApi(z);

export type Artwork = PrismaArtwork;

export type ArtworkCreate = Omit<Artwork, 'id' | 'createdAt' | 'updatedAt'>;

export const ArtworkSchema = ZodArtworkSchema;

// Input Validation for 'GET artworks/:id' endpoint
export const GetArtworkSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});

// Input Validation for 'POST artworks' endpoint (Create Artwork)
export const PostArtworkSchema = z.object({
  body: ArtworkSchema.omit({ id: true, createdAt: true, updatedAt: true, createdById: true }),
});

// Input Validation for 'PATCH artworks/:id' endpoint (Update Artwork)
export const PatchArtworkSchema = z.object({
  params: GetArtworkSchema.shape.params,
  body: ArtworkSchema.omit({ id: true, createdAt: true, updatedAt: true }).partial(),
});

// Input Validation for 'PATCH artworks/bulk-update' endpoint
export const PatchBulkUpdateArtworkSchema = z.object({
  body: z.object({
    ids: z.array(z.number().int().positive()),
    data: ArtworkSchema.omit({ id: true, createdAt: true, updatedAt: true }).partial(),
  }),
});

// Input Validation for 'DELETE artworks/:id' endpoint
export const DeleteArtworkSchema = GetArtworkSchema;

const ArtworkCategorySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  artworks: z.array(
    z.object({
      id: z.number().int(),
      title: z.string(),
      // Add other fields as necessary
    })
  ),
  mainImage: z
    .object({
      id: z.number().int().nullable(),
      url: z.string().nullable(),
      altText: z.string().nullable(),
    })
    .nullable(),
  mainImageId: z.number().int().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

// Define the Zod schema for the GET request response
export const GetArtworkCategoriesResponseSchema = z.array(ArtworkCategorySchema);

export type ArtworkCategory = {
  id: number;
  name: string;
  mainImageId: number | null;
  createdAt: Date; // Changed from string to Date
  updatedAt: Date; // Changed from string to Date
  artworks: {
    id: number;
    title: string;
  }[];
  mainImage: {
    id: number | null;
    url: string | null;
    altText: string | null;
  } | null;
};
