import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ContactUpdateOneRequiredWithoutAddressNestedInputObjectSchema } from './ContactUpdateOneRequiredWithoutAddressNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ContactAddressUpdateInput> = z
  .object({
    street: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    city: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    state: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    zip: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    contact: z.lazy(() => ContactUpdateOneRequiredWithoutAddressNestedInputObjectSchema).optional(),
  })
  .strict();

export const ContactAddressUpdateInputObjectSchema = Schema;
