import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';

export const SaleDeleteOneSchema = z.object({ where: SaleWhereUniqueInputObjectSchema });
