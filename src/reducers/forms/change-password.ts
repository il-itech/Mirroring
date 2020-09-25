import { handleActions } from 'redux-actions';

import { IChangePasswordForm } from 'interfaces/state.interfaces/forms.interfaces/form-change-password.interface';
import { FORM_TYPES } from 'enums';
import { getFormsCommonReducer, getInitialFormState } from '../common';

const additionalState = {
  formData: {
    password: '',
    passwordConfirmation: '',
  },
};

export const changePassword = handleActions<IChangePasswordForm, any>(
  {
    ...getFormsCommonReducer(FORM_TYPES.CHANGE_PASSWORD, additionalState),
  },
  getInitialFormState(additionalState),
);
