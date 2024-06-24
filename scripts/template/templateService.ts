import { StatusCodes } from 'http-status-codes';

import { Template } from '@/api/template/templateModel';
import { templateRepository } from '@/api/template/templateRepository';
import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse';
import { logger } from '@/server';

export const templateService = {
  // Retrieves all templates from the database
  findAll: async (): Promise<ServiceResponse<Template[] | null>> => {
    try {
      const templates = await templateRepository.findAllAsync();
      if (!templates) {
        return new ServiceResponse(ResponseStatus.Failed, 'No Templates found', null, StatusCodes.NOT_FOUND);
      }
      return new ServiceResponse<Template[]>(ResponseStatus.Success, 'Templates found', templates, StatusCodes.OK);
    } catch (ex) {
      const errorMessage = `Error finding all templates: $${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },

  // Retrieves a single template by their ID
  findById: async (id: number): Promise<ServiceResponse<Template | null>> => {
    try {
      const template = await templateRepository.findByIdAsync(id);
      if (!template) {
        return new ServiceResponse(ResponseStatus.Failed, 'Template not found', null, StatusCodes.NOT_FOUND);
      }
      return new ServiceResponse<Template>(ResponseStatus.Success, 'Template found', template, StatusCodes.OK);
    } catch (ex) {
      const errorMessage = `Error finding template with id ${id}:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },
};
