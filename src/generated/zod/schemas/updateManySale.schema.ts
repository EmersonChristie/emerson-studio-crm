import { z } from 'zod';
import { SaleUpdateManyMutationInputObjectSchema } from './objects/SaleUpdateManyMutationInput.schema';
import { SaleWhereInputObjectSchema } from './objects/SaleWhereInput.schema';

export const SaleUpdateManySchema = z.object({
  data: SaleUpdateManyMutationInputObjectSchema,
  where: SaleWhereInputObjectSchema.optional(),
});
