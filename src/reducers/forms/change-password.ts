import { handleActions } from 'redux-actions';

import { IChangePassword } from 'types/state.interfaces/forms-interface';
import { FORM_TYPES } from 'constants';
import { getFormsCommonReducer, getInitialFormState } from '../common';

const additionalState = {
  formData: {
    password: '',
    passwordConfirmation: '',
  },
};

export const changePassword = handleActions<IChangePassword, any>(
  {
    ...getFormsCommonReducer(FORM_TYPES.CHANGE_PASSWORD, additionalState),
  },
  getInitialFormState(additionalState),
);
