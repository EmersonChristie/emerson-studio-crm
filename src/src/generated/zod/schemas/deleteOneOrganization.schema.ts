import { z } from 'zod';
import { OrganizationWhereUniqueInputObjectSchema } from './objects/OrganizationWhereUniqueInput.schema';

export const OrganizationDeleteOneSchema = z.object({ where: OrganizationWhereUniqueInputObjectSchema });
