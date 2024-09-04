import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import express, { Request, Response, Router } from 'express';
import { z } from 'zod';

import {
  GetArtworkSchema,
  ArtworkSchema,
  PostArtworkSchema,
  PatchArtworkSchema,
  PatchBulkUpdateArtworkSchema,
  DeleteArtworkSchema,
  GetArtworkCategoriesResponseSchema,
} from '@/api/artwork/artworkModel';
import { artworkService } from '@/api/artwork/artworkService';
import { createApiResponse } from '@/api-docs/openAPIResponseBuilders';
import { handleServiceResponse, validateRequest, authenticateRequest } from '@/common/utils/httpHandlers';

export const artworkRegistry = new OpenAPIRegistry();

artworkRegistry.register('Artwork', ArtworkSchema);

export const artworkRouter: Router = (() => {
  const router = express.Router();

  // Get Categories Route
  artworkRegistry.registerPath({
    method: 'get',
    path: '/artworks/categories',
    tags: ['Artwork'],
    responses: createApiResponse(GetArtworkCategoriesResponseSchema, 'Success'),
  });

  router.get('/categories', async (_req: Request, res: Response) => {
    const categories = await artworkService.getCategories();
    handleServiceResponse(categories, res);
  });

  // Get Artworks Route
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

  // Get Artwork by ID Route
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

  //TODO: Add POST, PATCH, DELETE routes
  // Create Artwork Route
  artworkRegistry.registerPath({
    method: 'post',
    path: '/artworks',
    tags: ['Artwork'],
    request: {
      body: {
        content: { 'application/json': { schema: PostArtworkSchema.shape.body } },
      },
    },
    responses: createApiResponse(ArtworkSchema, 'Success'),
    security: [{ cookieAuth: [] }],
  });

  router.post('/', validateRequest(PostArtworkSchema), authenticateRequest, async (req: Request, res: Response) => {
    req.body.createdById = req.user?.id;
    const serviceResponse = await artworkService.create(req.body);
    handleServiceResponse(serviceResponse, res);
  });

  // Bulk Update Artwork Route
  artworkRegistry.registerPath({
    method: 'patch',
    path: '/artworks/bulk-update',
    tags: ['Artwork'],
    request: {
      body: { content: { 'application/json': { schema: PatchBulkUpdateArtworkSchema.shape.body } } },
    },
    responses: createApiResponse(ArtworkSchema, 'Success'),
    security: [{ cookieAuth: [] }],
  });

  router.patch(
    '/bulk-update',
    validateRequest(PatchBulkUpdateArtworkSchema),
    authenticateRequest,
    async (req: Request, res: Response) => {
      const { ids, data } = req.body;

      const serviceResponse = await artworkService.bulkUpdate(ids, data);
      handleServiceResponse(serviceResponse, res);
    }
  );

  // Update Artwork Route
  artworkRegistry.registerPath({
    method: 'patch',
    path: '/artworks/{id}',
    tags: ['Artwork'],
    request: {
      params: PatchArtworkSchema.shape.params,
      body: { content: { 'application/json': { schema: PatchArtworkSchema.shape.body } } },
    },
    responses: createApiResponse(ArtworkSchema, 'Success'),
    security: [{ cookieAuth: [] }],
  });

  router.patch(
    '/:id',
    validateRequest(PatchArtworkSchema),
    authenticateRequest,
    async (req: Request, res: Response) => {
      const id = parseInt(req.params.id as string, 10);
      const serviceResponse = await artworkService.update(id, req.body);
      handleServiceResponse(serviceResponse, res);
    }
  );

  // Delete Artwork Route
  artworkRegistry.registerPath({
    method: 'delete',
    path: '/artworks/{id}',
    tags: ['Artwork'],
    request: { params: DeleteArtworkSchema.shape.params },
    responses: createApiResponse(ArtworkSchema, 'Successfully Deleted Artwork.'),
    security: [{ cookieAuth: [] }],
  });

  router.delete(
    '/:id',
    validateRequest(DeleteArtworkSchema),
    authenticateRequest,
    async (req: Request, res: Response) => {
      const id = parseInt(req.params.id as string, 10);
      const serviceResponse = await artworkService.delete(id);
      handleServiceResponse(serviceResponse, res);
    }
  );

  return router;
})();
