import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';
import { Artwork as PrismaArtwork } from '@prisma/client';

import { ArtworkSchema as ZodArtworkSchema } from '@/common/zod/schemas';

import { commonValidations } from '@/common/utils/commonValidation';

extendZodWithOpenApi(z);

export type Artwork = PrismaArtwork;

export const ArtworkSchema = ZodArtworkSchema;

// Input Validation for 'GET artworks/:id' endpoint
export const GetArtworkSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});
