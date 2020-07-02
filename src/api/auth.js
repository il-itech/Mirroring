import { getConfig } from 'helpers/env';

const api = getConfig('HTTP_API_URL');

/**
 * API for sign in
 * @param {Object} ajax
 * @param {Object} body
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
 * @param {Object} body
 */
export const signUp = (ajax, body) => ajax({
  url: `${api}/auth/sign-up`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body,
});

/**
 * API for email confirmation
 * @param {Object} ajax
 * @param {String} token
 */
export const confirmEmail = (ajax, token) => ajax({
  url: `${api}/auth/confirm-email?token=${token}`,
  method: 'GET',
});
