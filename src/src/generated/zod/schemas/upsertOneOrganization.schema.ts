import { z } from 'zod';
import { OrganizationWhereUniqueInputObjectSchema } from './objects/OrganizationWhereUniqueInput.schema';
import { OrganizationCreateInputObjectSchema } from './objects/OrganizationCreateInput.schema';
import { OrganizationUncheckedCreateInputObjectSchema } from './objects/OrganizationUncheckedCreateInput.schema';
import { OrganizationUpdateInputObjectSchema } from './objects/OrganizationUpdateInput.schema';
import { OrganizationUncheckedUpdateInputObjectSchema } from './objects/OrganizationUncheckedUpdateInput.schema';

export const OrganizationUpsertSchema = z.object({
  where: OrganizationWhereUniqueInputObjectSchema,
  create: z.union([OrganizationCreateInputObjectSchema, OrganizationUncheckedCreateInputObjectSchema]),
  update: z.union([OrganizationUpdateInputObjectSchema, OrganizationUncheckedUpdateInputObjectSchema]),
});
