import { z } from 'zod';

export const ArtworkOfferScalarFieldEnumSchema = z.enum([
  'id',
  'amount',
  'discount',
  'message',
  'createdAt',
  'updatedAt',
  'contactId',
  'artworkId',
]);
