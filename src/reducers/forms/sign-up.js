import { handleActions } from 'redux-actions';

import { getFormsCommonReducer, getInitialState } from './common';
import { FORM_TYPES } from '../../constants';

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
