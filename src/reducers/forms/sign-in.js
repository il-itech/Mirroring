import { handleActions } from 'redux-actions';

import { getFormsCommonReducer, getInitialState } from './common';
import { FORM_TYPES } from '../../constants';

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
