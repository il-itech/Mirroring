import isEmail from 'validator/lib/isEmail';

import { VALIDATION_ERRORS, VALIDATION_ERRORS_MESSAGES } from 'constants';
import { isEmptyOrNil, toString } from './utils';

/**
 * @param {String} error
 * @param {Number} value
 */
export const getFieldError = (error, value = null) => ({
  message: VALIDATION_ERRORS_MESSAGES[error] || VALIDATION_ERRORS_MESSAGES[VALIDATION_ERRORS.UNDEFINED],
  values: { value },
});

/**
 * @param {String} field
 * @param {Object} formData
 * @param {Number} value
 */
export const validateMinLength = (field, formData, value) =>
  toString(formData[field]).length < value
  && getFieldError(VALIDATION_ERRORS.TOO_SHORT, value);

export const validateMaxLength = (field, formData, value) =>
  toString(formData[field]).length > value
  && getFieldError(VALIDATION_ERRORS.TOO_LONG, value);

export const validateRequired = (field, formData) =>
  (!formData[field] || /^\s+$/.test(formData[field]))
  && getFieldError(VALIDATION_ERRORS.MISSING_REQUIRED);

export const validateEmail = (field, formData) =>
  !isEmptyOrNil(formData[field]) && !isEmail(formData[field].trim())
  && getFieldError(VALIDATION_ERRORS.INVALID_EMAIL);

export const validatePasswordEquality = (field, formData) =>
  !isEmptyOrNil(formData[field]) && /^([a-zA-Z_]+|\d+)$/.test(formData[field])
  && getFieldError(VALIDATION_ERRORS.INVALID_PASSWORD);

export const validatePasswordsConfirmation = (field, formData) =>
  toString(formData[field]) !== toString(formData.password)
  && getFieldError(VALIDATION_ERRORS.PASSWORD_CONFIRMATION);
