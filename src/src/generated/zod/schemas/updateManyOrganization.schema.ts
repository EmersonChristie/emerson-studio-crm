import { z } from 'zod';
import { OrganizationUpdateManyMutationInputObjectSchema } from './objects/OrganizationUpdateManyMutationInput.schema';
import { OrganizationWhereInputObjectSchema } from './objects/OrganizationWhereInput.schema';

export const OrganizationUpdateManySchema = z.object({
  data: OrganizationUpdateManyMutationInputObjectSchema,
  where: OrganizationWhereInputObjectSchema.optional(),
});
