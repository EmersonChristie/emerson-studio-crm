import { z } from 'zod';

export const ArtworkScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'price',
  'createdAt',
  'updatedAt',
  'artist',
  'category',
  'status',
  'mainImageId',
]);
