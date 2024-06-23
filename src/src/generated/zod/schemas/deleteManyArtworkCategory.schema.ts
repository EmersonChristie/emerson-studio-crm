import { z } from 'zod';
import { ArtworkCategoryWhereInputObjectSchema } from './objects/ArtworkCategoryWhereInput.schema';

export const ArtworkCategoryDeleteManySchema = z.object({ where: ArtworkCategoryWhereInputObjectSchema.optional() });
