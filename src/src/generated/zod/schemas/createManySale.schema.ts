import { z } from 'zod';
import { SaleCreateManyInputObjectSchema } from './objects/SaleCreateManyInput.schema';

export const SaleCreateManySchema = z.object({
  data: z.union([SaleCreateManyInputObjectSchema, z.array(SaleCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
});
