import { Observable } from 'rxjs/internal/Observable';
import { AjaxCreationMethod, AjaxResponse } from 'rxjs/internal/observable/dom/AjaxObservable';

import { ISignInFormData } from 'interfaces/state.interfaces/forms.interfaces/form-sign-in.interface';
import { ISignUpFormData } from 'interfaces/state.interfaces/forms.interfaces/form-sign-up.interface';
import { IResetPasswordFormData } from 'interfaces/state.interfaces/forms.interfaces/form-reset-password';

import { getConfig } from 'helpers/env';

const api = getConfig('HTTP_API_URL');

/**
 * API for sign in
 * @param {AjaxCreationMethod} ajax
 * @param {Object} body
 */
export const signIn = (
  ajax: AjaxCreationMethod,
  body: ISignInFormData,
): Observable<AjaxResponse> => ajax({
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
export const signUp = (
  ajax: AjaxCreationMethod,
  body: ISignUpFormData,
): Observable<AjaxResponse> => ajax({
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
    Authorization: `Bearer ${token}`,
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

/**
 * API for reset password
 * @param {AjaxCreationMethod} ajax
 * @param {Object} body
 */
export const resetPassword = (
  ajax: AjaxCreationMethod,
  body: IResetPasswordFormData,
): Observable<AjaxResponse> => ajax({
  url: `${api}/auth/reset-password`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body,
});

/**
 * API for change password
 * @param {AjaxCreationMethod} ajax
 * @param {Object} body
 */
export const changePassword = (
  ajax: AjaxCreationMethod,
  body: { password: string; token: string },
): Observable<AjaxResponse> => ajax({
  url: `${api}/auth/change-password`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body,
});
