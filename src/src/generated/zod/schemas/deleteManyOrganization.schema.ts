import { z } from 'zod';
import { OrganizationWhereInputObjectSchema } from './objects/OrganizationWhereInput.schema';

export const OrganizationDeleteManySchema = z.object({ where: OrganizationWhereInputObjectSchema.optional() });
