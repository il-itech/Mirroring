import { getConfig } from '../helpers/env';

const host = getConfig('HOST');

/**
 * API for sign in
 * @param {Object} ajax
 */
export const signIn = (ajax, body) => ajax({
  url: `${host}/api/sign-in`,
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
  url: `${host}/api/sign-up`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body,
});
