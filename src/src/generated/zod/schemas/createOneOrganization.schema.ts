import { z } from 'zod';
import { OrganizationCreateInputObjectSchema } from './objects/OrganizationCreateInput.schema';
import { OrganizationUncheckedCreateInputObjectSchema } from './objects/OrganizationUncheckedCreateInput.schema';

export const OrganizationCreateOneSchema = z.object({
  data: z.union([OrganizationCreateInputObjectSchema, OrganizationUncheckedCreateInputObjectSchema]),
});
