import { z } from 'zod';

export const ImageScalarFieldEnumSchema = z.enum([
  'id',
  'url',
  'altText',
  'createdAt',
  'updatedAt',
  'artworkId',
  'isMain',
]);
