import { handleActions } from 'redux-actions';

import { FORM_TYPES } from 'constants';
import { getFormsCommonReducer, getInitialState } from './common';

const additionalState = {
  formData: {
    firstname: '',
    lastname: '',
    email: '',
    country: '',
  },
};

export const account = handleActions(
  {
    ...getFormsCommonReducer(FORM_TYPES.ACCOUNT, additionalState),
  },
  getInitialState(additionalState),
);
