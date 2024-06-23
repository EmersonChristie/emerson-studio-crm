import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ArtworkUpdateOneRequiredWithoutInquiriesNestedInputObjectSchema } from './ArtworkUpdateOneRequiredWithoutInquiriesNestedInput.schema';
import { ContactUpdateOneRequiredWithoutInquiriesNestedInputObjectSchema } from './ContactUpdateOneRequiredWithoutInquiriesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InquiryUpdateInput> = z
  .object({
    message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    artwork: z.lazy(() => ArtworkUpdateOneRequiredWithoutInquiriesNestedInputObjectSchema).optional(),
    contact: z.lazy(() => ContactUpdateOneRequiredWithoutInquiriesNestedInputObjectSchema).optional(),
  })
  .strict();

export const InquiryUpdateInputObjectSchema = Schema;
