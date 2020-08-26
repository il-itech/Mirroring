import { handleActions } from 'redux-actions';

import { FORM_TYPES } from 'constants';
import { getFormsCommonReducer, getInitialState } from './common';

const additionalState = {
  formData: {
    password: '',
    passwordConfirmation: '',
  },
};

export const changePassword = handleActions(
  {
    ...getFormsCommonReducer(FORM_TYPES.CHANGE_PASSWORD, additionalState),
  },
  getInitialState(additionalState),
);
