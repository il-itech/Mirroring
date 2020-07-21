import { handleActions } from 'redux-actions';

import { FORM_TYPES } from 'constants';
import { getFormsCommonReducer, getInitialState } from './common';

const additionalState = {
  formData: {
    email: '',
    password: '',
  },
};

export const signIn = handleActions(
  {
    ...getFormsCommonReducer(FORM_TYPES.SIGN_IN, additionalState),
  },
  getInitialState(additionalState),
);
