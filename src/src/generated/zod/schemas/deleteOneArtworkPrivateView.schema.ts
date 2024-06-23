import { z } from 'zod';
import { ArtworkPrivateViewWhereUniqueInputObjectSchema } from './objects/ArtworkPrivateViewWhereUniqueInput.schema';

export const ArtworkPrivateViewDeleteOneSchema = z.object({ where: ArtworkPrivateViewWhereUniqueInputObjectSchema });
