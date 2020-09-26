import { Observable } from 'rxjs/internal/Observable';
import { AjaxCreationMethod, AjaxResponse } from 'rxjs/internal/observable/dom/AjaxObservable';

import { getConfig } from 'helpers/env';

const api = getConfig('HTTP_API_URL');

/**
 * API for sign in
 * @param {AjaxCreationMethod} ajax
 * @param {Object} body
 */
export const signIn = (ajax: AjaxCreationMethod, body): Observable<AjaxResponse> => ajax({
  url: `${api}/auth/sign-in`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body,
});

/**
 * API for sign up
 * @param {AjaxCreationMethod} ajax
 * @param {Object} body
 */
export const signUp = (ajax: AjaxCreationMethod, body): Observable<AjaxResponse> => ajax({
  url: `${api}/auth/sign-up`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body,
});

/**
 * API for sign out
 * @param {AjaxCreationMethod} ajax
 * @param {String} token
 */
export const signOut = (ajax: AjaxCreationMethod, token: string): Observable<AjaxResponse> => ajax({
  url: `${api}/auth/sign-out`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: { token },
});

/**
 * API for email confirmation
 * @param {AjaxCreationMethod} ajax
 * @param {String} token
 */
export const confirmEmail = (ajax: AjaxCreationMethod, token: string): Observable<AjaxResponse> => ajax({
  url: `${api}/auth/confirm-email?token=${token}`,
  method: 'GET',
});
