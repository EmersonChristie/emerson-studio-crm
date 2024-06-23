import { z } from 'zod';
import { OrganizationWhereUniqueInputObjectSchema } from './objects/OrganizationWhereUniqueInput.schema';

export const OrganizationFindUniqueSchema = z.object({ where: OrganizationWhereUniqueInputObjectSchema });
