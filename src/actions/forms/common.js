import { createActions } from 'redux-actions';

export const {
  setFormData,
  replaceFormData,
  setFormError,
  setFormErrors,
  clearFormData,
  clearFormError,
  clearFormErrors,
  clearForm,
} = createActions(
  {
    SET_FORM_DATA: (formName, formData) => ({
      formName,
      formData,
    }),
    REPLACE_FORM_DATA: (formName, formData) => ({
      formName,
      formData,
    }),
    SET_FORM_ERROR: (formName, error) => ({
      formName,
      error,
    }),
    SET_FORM_ERRORS: (formName, errors) => ({
      formName,
      errors,
    }),
    CLEAR_FORM_DATA: formName => ({
      formName,
    }),
    CLEAR_FORM_ERROR: (formName, field) => ({
      formName,
      field,
    }),
    CLEAR_FORM_ERRORS: formName => ({
      formName,
    }),
    CLEAR_FORM: formName => ({
      formName,
    }),
  },
);
