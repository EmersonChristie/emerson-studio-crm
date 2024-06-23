import { z } from 'zod';
import { SaleWhereInputObjectSchema } from './objects/SaleWhereInput.schema';

export const SaleDeleteManySchema = z.object({ where: SaleWhereInputObjectSchema.optional() });
