import { z } from 'zod';
import { OrganizationUpdateInputObjectSchema } from './objects/OrganizationUpdateInput.schema';
import { OrganizationUncheckedUpdateInputObjectSchema } from './objects/OrganizationUncheckedUpdateInput.schema';
import { OrganizationWhereUniqueInputObjectSchema } from './objects/OrganizationWhereUniqueInput.schema';

export const OrganizationUpdateOneSchema = z.object({
  data: z.union([OrganizationUpdateInputObjectSchema, OrganizationUncheckedUpdateInputObjectSchema]),
  where: OrganizationWhereUniqueInputObjectSchema,
});
