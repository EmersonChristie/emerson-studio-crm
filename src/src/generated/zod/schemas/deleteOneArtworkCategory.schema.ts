import { z } from 'zod';
import { ArtworkCategoryWhereUniqueInputObjectSchema } from './objects/ArtworkCategoryWhereUniqueInput.schema';

export const ArtworkCategoryDeleteOneSchema = z.object({ where: ArtworkCategoryWhereUniqueInputObjectSchema });
