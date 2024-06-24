import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import express, { Request, Response, Router } from 'express';
import { z } from 'zod';

import { GetArtworkSchema, ArtworkSchema } from '@/api/artwork/artworkModel';
import { artworkService } from '@/api/artwork/artworkService';
import { createApiResponse } from '@/api-docs/openAPIResponseBuilders';
import { handleServiceResponse, validateRequest } from '@/common/utils/httpHandlers';

export const artworkRegistry = new OpenAPIRegistry();

artworkRegistry.register('Artwork', ArtworkSchema);

export const artworkRouter: Router = (() => {
  const router = express.Router();

  artworkRegistry.registerPath({
    method: 'get',
    path: '/artworks',
    tags: ['Artwork'],
    responses: createApiResponse(z.array(ArtworkSchema), 'Success'),
  });

  router.get('/', async (_req: Request, res: Response) => {
    const serviceResponse = await artworkService.findAll();
    handleServiceResponse(serviceResponse, res);
  });

  artworkRegistry.registerPath({
    method: 'get',
    path: '/artworks/{id}',
    tags: ['Artwork'],
    request: { params: GetArtworkSchema.shape.params },
    responses: createApiResponse(ArtworkSchema, 'Success'),
  });

  router.get('/:id', validateRequest(GetArtworkSchema), async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string, 10);
    const serviceResponse = await artworkService.findById(id);
    handleServiceResponse(serviceResponse, res);
  });

  return router;
})();
