import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';
import { Prisma, Artwork as PrismaArtwork } from '@prisma/client';
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
