import { z } from 'zod';

export const ArtworkPrivateViewScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'description',
  'url',
  'createdById',
  'createdAt',
  'updatedAt',
]);
