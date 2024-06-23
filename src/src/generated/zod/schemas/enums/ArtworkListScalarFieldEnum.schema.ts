import { z } from 'zod';

export const ArtworkListScalarFieldEnumSchema = z.enum(['id', 'name', 'createdAt', 'updatedAt']);
