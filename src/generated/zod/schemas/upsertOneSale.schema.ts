import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';
import { SaleCreateInputObjectSchema } from './objects/SaleCreateInput.schema';
import { SaleUncheckedCreateInputObjectSchema } from './objects/SaleUncheckedCreateInput.schema';
import { SaleUpdateInputObjectSchema } from './objects/SaleUpdateInput.schema';
import { SaleUncheckedUpdateInputObjectSchema } from './objects/SaleUncheckedUpdateInput.schema';

export const SaleUpsertSchema = z.object({
  where: SaleWhereUniqueInputObjectSchema,
  create: z.union([SaleCreateInputObjectSchema, SaleUncheckedCreateInputObjectSchema]),
  update: z.union([SaleUpdateInputObjectSchema, SaleUncheckedUpdateInputObjectSchema]),
});
