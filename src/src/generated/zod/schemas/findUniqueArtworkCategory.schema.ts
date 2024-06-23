import { z } from 'zod';
import { ArtworkCategoryWhereUniqueInputObjectSchema } from './objects/ArtworkCategoryWhereUniqueInput.schema';

export const ArtworkCategoryFindUniqueSchema = z.object({ where: ArtworkCategoryWhereUniqueInputObjectSchema });
