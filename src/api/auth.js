import { getConfig } from '../helpers/env';

const api = getConfig('HTTP_API_URL');

/**
 * API for sign in
 * @param {Object} ajax
 */
export const signIn = (ajax, body) => ajax({
  url: `${api}/auth/sign-in`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body,
});

/**
 * API for sign up
 * @param {Object} ajax
 */
export const signUp = (ajax, body) => ajax({
  url: `${api}/auth/sign-up`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body,
});
