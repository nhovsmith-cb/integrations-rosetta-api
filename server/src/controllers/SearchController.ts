/**
 * The SearchController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

import Controller from './Controller';
import service from '../services/SearchService';

export const searchTransactions = async (request, response) => {
  await Controller.handleRequest(request, response, service.searchTransactions);
};
