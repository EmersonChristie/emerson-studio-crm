import { z } from 'zod';

export const EmailCampaignScalarFieldEnumSchema = z.enum([
  'id',
  'subject',
  'content',
  'sentAt',
  'createdAt',
  'updatedAt',
  'createdById',
  'status',
  'template',
]);
