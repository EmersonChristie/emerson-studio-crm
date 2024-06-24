import { StatusCodes } from 'http-status-codes';

import { Contact } from '@/api/contact/contactModel';
import { contactRepository } from '@/api/contact/contactRepository';
import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse';
import { logger } from '@/server';

export const contactService = {
  // Retrieves all contacts from the database
  findAll: async (): Promise<ServiceResponse<Contact[] | null>> => {
    try {
      const contacts = await contactRepository.findAllAsync();
      if (!contacts) {
        return new ServiceResponse(ResponseStatus.Failed, 'No Contacts found', null, StatusCodes.NOT_FOUND);
      }
      return new ServiceResponse<Contact[]>(ResponseStatus.Success, 'Contacts found', contacts, StatusCodes.OK);
    } catch (ex) {
      const errorMessage = `Error finding all contacts: $${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },

  // Retrieves a single contact by their ID
  findById: async (id: number): Promise<ServiceResponse<Contact | null>> => {
    try {
      const contact = await contactRepository.findByIdAsync(id);
      if (!contact) {
        return new ServiceResponse(ResponseStatus.Failed, 'Contact not found', null, StatusCodes.NOT_FOUND);
      }
      return new ServiceResponse<Contact>(ResponseStatus.Success, 'Contact found', contact, StatusCodes.OK);
    } catch (ex) {
      const errorMessage = `Error finding contact with id ${id}:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },
};
