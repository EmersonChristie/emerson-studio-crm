import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import express, { Request, Response, Router } from 'express';
import { z } from 'zod';

import { GetTemplateSchema, TemplateSchema } from '@/api/template/templateModel';
import { templateService } from '@/api/template/templateService';
import { createApiResponse } from '@/api-docs/openAPIResponseBuilders';
import { handleServiceResponse, validateRequest } from '@/common/utils/httpHandlers';

export const templateRegistry = new OpenAPIRegistry();

templateRegistry.register('Template', TemplateSchema);

export const templateRouter: Router = (() => {
  const router = express.Router();

  templateRegistry.registerPath({
    method: 'get',
    path: '/templates',
    tags: ['Template'],
    responses: createApiResponse(z.array(TemplateSchema), 'Success'),
  });

  router.get('/', async (_req: Request, res: Response) => {
    const serviceResponse = await templateService.findAll();
    handleServiceResponse(serviceResponse, res);
  });

  templateRegistry.registerPath({
    method: 'get',
    path: '/templates/{id}',
    tags: ['Template'],
    request: { params: GetTemplateSchema.shape.params },
    responses: createApiResponse(TemplateSchema, 'Success'),
  });

  router.get('/:id', validateRequest(GetTemplateSchema), async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string, 10);
    const serviceResponse = await templateService.findById(id);
    handleServiceResponse(serviceResponse, res);
  });

  return router;
})();
