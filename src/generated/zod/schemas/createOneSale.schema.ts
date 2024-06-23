import { z } from 'zod';
import { SaleCreateInputObjectSchema } from './objects/SaleCreateInput.schema';
import { SaleUncheckedCreateInputObjectSchema } from './objects/SaleUncheckedCreateInput.schema';

export const SaleCreateOneSchema = z.object({
  data: z.union([SaleCreateInputObjectSchema, SaleUncheckedCreateInputObjectSchema]),
});
