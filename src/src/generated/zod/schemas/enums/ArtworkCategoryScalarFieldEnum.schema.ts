import { z } from 'zod';

export const ArtworkCategoryScalarFieldEnumSchema = z.enum(['id', 'name', 'mainImageId', 'createdAt', 'updatedAt']);
