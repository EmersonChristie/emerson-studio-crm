import { z } from 'zod';
import { OrganizationCreateManyInputObjectSchema } from './objects/OrganizationCreateManyInput.schema';

export const OrganizationCreateManySchema = z.object({
  data: z.union([OrganizationCreateManyInputObjectSchema, z.array(OrganizationCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
});
