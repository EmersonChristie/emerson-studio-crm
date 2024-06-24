import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import express, { Request, Response, Router } from 'express';
import { z } from 'zod';

import { GetContactSchema, ContactSchema } from '@/api/contact/contactModel';
import { contactService } from '@/api/contact/contactService';
import { createApiResponse } from '@/api-docs/openAPIResponseBuilders';
import { handleServiceResponse, validateRequest } from '@/common/utils/httpHandlers';

export const contactRegistry = new OpenAPIRegistry();

contactRegistry.register('Contact', ContactSchema);

export const contactRouter: Router = (() => {
  const router = express.Router();

  contactRegistry.registerPath({
    method: 'get',
    path: '/contacts',
    tags: ['Contact'],
    responses: createApiResponse(z.array(ContactSchema), 'Success'),
  });

  router.get('/', async (_req: Request, res: Response) => {
    const serviceResponse = await contactService.findAll();
    handleServiceResponse(serviceResponse, res);
  });

  contactRegistry.registerPath({
    method: 'get',
    path: '/contacts/{id}',
    tags: ['Contact'],
    request: { params: GetContactSchema.shape.params },
    responses: createApiResponse(ContactSchema, 'Success'),
  });

  router.get('/:id', validateRequest(GetContactSchema), async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string, 10);
    const serviceResponse = await contactService.findById(id);
    handleServiceResponse(serviceResponse, res);
  });

  return router;
})();
