import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ZodError, ZodSchema } from 'zod';
import { userRepository } from '@/api/user/userRepository';
import { auth } from '@/common/utils/authentication';

import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse';

export const handleServiceResponse = (serviceResponse: ServiceResponse<any>, response: Response) => {
  return response.status(serviceResponse.statusCode).send(serviceResponse);
};

export const validateRequest = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('request body: ', req.body);
    console.log('type of ids: ', Array.isArray(req.body.ids) ? 'array' : typeof req.body.ids);
    schema.parse({ body: req.body, query: req.query, params: req.params });
    next();
  } catch (err) {
    const errorMessage = `Invalid input: ${(err as ZodError).errors.map((e) => e.message).join(', ')}`;
    const statusCode = StatusCodes.BAD_REQUEST;
    res.status(statusCode).send(new ServiceResponse<null>(ResponseStatus.Failed, errorMessage, null, statusCode));
  }
};

// Authenticate Request with token
export const authenticateRequest = async (req: Request, res: Response, next: NextFunction) => {
  console.log('req.cookies: ', req.cookies);
  const token = req.cookies?.token;

  console.log('token from cookies: ', token);

  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send(
        new ServiceResponse<null>(
          ResponseStatus.Failed,
          'Unauthorized: No Token in Req Cookie',
          null,
          StatusCodes.UNAUTHORIZED
        )
      );
  }

  try {
    const user = await userRepository.findUserByTokenAsync(token);

    if (!user || user.token !== token) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send(
          new ServiceResponse<null>(
            ResponseStatus.Failed,
            'Unauthorized: Invalid Token',
            null,
            StatusCodes.UNAUTHORIZED
          )
        );
    }

    if (user.tokenExpiry && user.tokenExpiry < new Date()) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send(
          new ServiceResponse<null>(
            ResponseStatus.Failed,
            'Unauthorized: Token Expired',
            null,
            StatusCodes.UNAUTHORIZED
          )
        );
    }

    // Set user on req object
    req.user = auth.getSafeUser(user);

    next();
  } catch (err) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send(
        new ServiceResponse<null>(ResponseStatus.Failed, 'Error Authenticating Token', null, StatusCodes.UNAUTHORIZED)
      );
  }
};
