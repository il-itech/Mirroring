import { getConfig } from 'helpers/env';

const api = getConfig('HTTP_API_URL');

/**
 * API for setting user avatar
 * @param {Object} ajax
 * @param {Object} body
 */
export const setUserAvatar = (ajax, body, token) => ajax({
  url: `${api}/user/set-avatar`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body,
});
