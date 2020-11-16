import { FieldError, FormData, FormErrors } from 'interfaces';
import { VALIDATION_TYPES } from 'enums';
import {
  validateMinLength,
  validateMaxLength,
  validateEmail,
  validatePasswordEquality,
  validatePasswordsConfirmation,
  validateRequired,
} from './validate';
import { isEmptyOrNil } from './utils';

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
 */
export const checkErrors = <T>(
  fields: T,
  formData: FormData,
) => {
  const errors = {} as FormErrors;

  Object.entries(fields).forEach(([field, item]) => {
    let error: FieldError | undefined;

    if (!isEmptyOrNil(item.validation)) {
      item.validation.some(({ type, value }: { type: string; value: string | number }) => {
        const fieldError = FIELD_VALIDATIONS[type](field, formData, value) as FieldError;

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
