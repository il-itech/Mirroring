import { getConfig } from 'helpers/env';

const api = getConfig('HTTP_API_URL');

/**
 * API for receive list of all users
 * @param {Object} ajax
 */
export const getAllUsers = ajax => ajax({
  url: `${api}/user/get-all-users`,
  method: 'GET',
});
