import { handleActions } from 'redux-actions';

import { FORM_TYPES } from 'constants';
import { getFormsCommonReducer, getInitialState } from './common';

const additionalState = {
  formData: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  },
};

export const signUp = handleActions(
  {
    ...getFormsCommonReducer(FORM_TYPES.SIGN_UP, additionalState),
  },
  getInitialState(additionalState),
);
