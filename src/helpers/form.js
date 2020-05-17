import {
  validateMinLength,
  validateMaxLength,
  validateEmail,
  validatePasswordEquality,
  validatePasswordsConfirmation,
  validateRequired,
} from './validate';
import { isEmptyOrNil } from './utils';
import { VALIDATION_TYPES } from '../constants';

export const FIELD_VALIDATIONS = {
  [VALIDATION_TYPES.REQUIRED]: validateRequired,
  [VALIDATION_TYPES.EMAIL]: validateEmail,
  [VALIDATION_TYPES.MIN_LENGTH]: validateMinLength,
  [VALIDATION_TYPES.MAX_LENGTH]: validateMaxLength,
  [VALIDATION_TYPES.PASSWORD_EQUALITY]: validatePasswordEquality,
  [VALIDATION_TYPES.PASSWORD_CONFIRMATION]: validatePasswordsConfirmation,
};

/**
 * Return errors
 * @param {Object} fields
 * @param {Object} formData
 * @return {Object}
 */
export const checkErrors = (fields, formData) => {
  const errors = {};

  Object.entries(fields).forEach(([field, item]) => {
    let error;

    if (!isEmptyOrNil(item.validation)) {
      item.validation.some(({ type, value }) => {
        const fieldError = FIELD_VALIDATIONS[type](field, formData, value);

        if (fieldError) {
          error = fieldError;
        }

        return error;
      });
    }

    if (error) {
      errors[field] = error;
    }
  });

  return errors;
};
