import isEmail from 'validator/lib/isEmail';

import { VALIDATION_ERRORS, VALIDATION_ERRORS_MESSAGES } from 'enums';
import { FormData } from 'interfaces';
import { isEmptyOrNil, toString } from './utils';

/**
 * @param {String} error
 * @param {Number} value
 */
export const getFieldError = (error: string, value: number | string | null = null) => ({
  message: VALIDATION_ERRORS_MESSAGES[error] || VALIDATION_ERRORS_MESSAGES[VALIDATION_ERRORS.UNDEFINED],
  values: { value },
});

export const validateMinLength = (field: string, formData: FormData, value: number) =>
  toString(formData[field]).length < value
  && getFieldError(VALIDATION_ERRORS.TOO_SHORT, value);

export const validateMaxLength = (field: string, formData: FormData, value: number) =>
  toString(formData[field]).length > value
  && getFieldError(VALIDATION_ERRORS.TOO_LONG, value);

export const validateRequired = (field: string, formData: {}) =>
  (!formData[field] || /^\s+$/.test(formData[field]))
  && getFieldError(VALIDATION_ERRORS.MISSING_REQUIRED);

export const validateEmail = (field: string, formData: {}) =>
  !isEmptyOrNil(formData[field]) && !isEmail(formData[field].trim())
  && getFieldError(VALIDATION_ERRORS.INVALID_EMAIL);

export const validatePasswordEquality = (field: string, formData: {}) =>
  !isEmptyOrNil(formData[field]) && /^([a-zA-Z_]+|\d+)$/.test(formData[field])
  && getFieldError(VALIDATION_ERRORS.INVALID_PASSWORD);

export const validatePasswordsConfirmation = (field: string, formData: FormData) =>
  toString(formData[field]) !== toString(formData.password)
  && getFieldError(VALIDATION_ERRORS.PASSWORD_CONFIRMATION);
