import { createActionCreator } from 'deox';

import { FormErrors, FormData, FieldError } from 'interfaces';

export const setFormData = createActionCreator(
  'SET_FORM_DATA',
  resolve => (formName: string, formData: FormData) => resolve({ formName, formData }),
);

export const replaceFormData = createActionCreator(
  'REPLACE_FORM_DATA',
  resolve => (formName: string, formData: FormData) => resolve({ formName, formData }),
);

export const setFormError = createActionCreator(
  'SET_FORM_ERROR',
  resolve => (formName: string, error: FieldError) => resolve({ formName, error }),
);

export const setFormErrors = createActionCreator(
  'SET_FORM_ERRORS',
  resolve => (formName: string, errors: FormErrors) => resolve({ formName, errors }),
);

export const clearFormData = createActionCreator(
  'CLEAR_FORM_DATA',
  resolve => (formName: string, field: string) => resolve({ formName, field }),
);

export const clearFormError = createActionCreator(
  'CLEAR_FORM_ERROR',
  resolve => (formName: string, field: string) => resolve({ formName, field }),
);

export const clearFormErrors = createActionCreator(
  'CLEAR_FORM_ERRORS',
  resolve => (formName: string) => resolve({ formName }),
);

export const clearForm = createActionCreator(
  'CLEAR_FORM',
  resolve => (formName: string) => resolve({ formName }),
);
