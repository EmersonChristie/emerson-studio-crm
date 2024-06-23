import { z } from 'zod';
import { SaleOrderByWithRelationInputObjectSchema } from './objects/SaleOrderByWithRelationInput.schema';
import { SaleWhereInputObjectSchema } from './objects/SaleWhereInput.schema';
import { SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';
import { SaleScalarFieldEnumSchema } from './enums/SaleScalarFieldEnum.schema';

export const SaleFindManySchema = z.object({
  orderBy: z
    .union([SaleOrderByWithRelationInputObjectSchema, SaleOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: SaleWhereInputObjectSchema.optional(),
  cursor: SaleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SaleScalarFieldEnumSchema).optional(),
});
