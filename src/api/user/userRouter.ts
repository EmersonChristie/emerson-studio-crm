import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import express, { Request, Response, Router } from 'express';
import { z } from 'zod';

import {
  GetUserSchema,
  UserSchema,
  SafeUser,
  LoginSchema,
  PostLoginSchema,
  RegisterSchema,
  PostRegisterSchema,
  RequestPasswordResetSchema,
  ResetPasswordSchema,
  ConfirmEmailSchema,
  SafeUserSchema,
} from '@/api/user/userModel';
import { userService } from '@/api/user/userService';
import { createApiResponse } from '@/api-docs/openAPIResponseBuilders';
import { handleServiceResponse, validateRequest } from '@/common/utils/httpHandlers';

export const userRegistry = new OpenAPIRegistry();

userRegistry.register('User', UserSchema);

export const userRouter: Router = (() => {
  const router = express.Router();

  userRegistry.registerPath({
    method: 'get',
    path: '/users',
    tags: ['User'],
    responses: createApiResponse(z.array(UserSchema), 'Success'),
  });

  router.get('/', async (_req: Request, res: Response) => {
    const serviceResponse = await userService.findAll();
    handleServiceResponse(serviceResponse, res);
  });

  userRegistry.registerPath({
    method: 'get',
    path: '/users/{id}',
    tags: ['User'],
    request: { params: GetUserSchema.shape.params },
    responses: createApiResponse(UserSchema, 'Success'),
  });

  router.get('/:id', validateRequest(GetUserSchema), async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string, 10);
    const serviceResponse = await userService.findById(id);
    handleServiceResponse(serviceResponse, res);
  });

  // Registration Route
  userRegistry.registerPath({
    method: 'post',
    path: '/users/register',
    tags: ['User'],
    request: {
      body: {
        content: {
          'application/json': {
            schema: PostRegisterSchema.shape.body,
          },
        },
      },
    },
    responses: createApiResponse(SafeUserSchema, 'Success'),
  });

  router.post('/register', validateRequest(PostRegisterSchema), async (req: Request, res: Response) => {
    const { email, password, name } = req.body;
    console.log('email from register route: ', email);
    const serviceResponse = await userService.register({ email, password, name });
    handleServiceResponse(serviceResponse, res);
  });

  // Login Route
  userRegistry.registerPath({
    method: 'post',
    path: '/users/login',
    tags: ['User'],
    request: {
      body: {
        content: {
          'application/json': {
            schema: LoginSchema,
          },
        },
      },
    },
    responses: createApiResponse(z.object({ token: z.string() }), 'Login successful'),
  });

  router.post('/login', validateRequest(LoginSchema), async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const serviceResponse = await userService.login({ email, password });
    handleServiceResponse(serviceResponse, res);
  });

  // Request Password Reset Route
  userRegistry.registerPath({
    method: 'post',
    path: '/users/request-password-reset',
    tags: ['User'],
    request: {
      body: {
        content: {
          'application/json': {
            schema: RequestPasswordResetSchema,
          },
        },
      },
    },
    responses: createApiResponse(z.object({ message: z.string() }), 'Password reset email sent'),
  });

  router.post(
    '/request-password-reset',
    validateRequest(RequestPasswordResetSchema),
    async (req: Request, res: Response) => {
      const { email } = req.body;
      const serviceResponse = await userService.requestPasswordReset({ email });
      handleServiceResponse(serviceResponse, res);
    }
  );

  // Reset Password Route
  userRegistry.registerPath({
    method: 'post',
    path: '/users/reset-password',
    tags: ['User'],
    request: {
      body: {
        content: {
          'application/json': {
            schema: ResetPasswordSchema,
          },
        },
      },
    },
    responses: createApiResponse(z.object({ message: z.string() }), 'Password reset successfully'),
  });

  router.post('/reset-password', validateRequest(ResetPasswordSchema), async (req: Request, res: Response) => {
    const { token, password } = req.body;
    const serviceResponse = await userService.resetPassword({ token, newPassword: password });
    handleServiceResponse(serviceResponse, res);
  });

  // Confirm Email Route
  userRegistry.registerPath({
    method: 'post',
    path: '/users/confirm-email',
    tags: ['User'],
    request: {
      body: {
        content: {
          'application/json': {
            schema: ConfirmEmailSchema,
          },
        },
      },
    },
    responses: createApiResponse(z.object({ message: z.string() }), 'Email confirmed successfully'),
  });

  router.post('/confirm-email', validateRequest(ConfirmEmailSchema), async (req: Request, res: Response) => {
    const { emailConfirmToken } = req.body;
    const serviceResponse = await userService.confirmEmail({ emailConfirmToken });
    handleServiceResponse(serviceResponse, res);
  });

  return router;
})();
