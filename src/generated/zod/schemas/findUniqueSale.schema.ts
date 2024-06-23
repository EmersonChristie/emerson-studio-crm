import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';

export const SaleFindUniqueSchema = z.object({ where: SaleWhereUniqueInputObjectSchema });
