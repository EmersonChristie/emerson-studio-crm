import { z } from 'zod';
import { SaleUpdateInputObjectSchema } from './objects/SaleUpdateInput.schema';
import { SaleUncheckedUpdateInputObjectSchema } from './objects/SaleUncheckedUpdateInput.schema';
import { SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';

export const SaleUpdateOneSchema = z.object({
  data: z.union([SaleUpdateInputObjectSchema, SaleUncheckedUpdateInputObjectSchema]),
  where: SaleWhereUniqueInputObjectSchema,
});
