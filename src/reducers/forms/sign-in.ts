import { handleActions } from 'redux-actions';

import { ISignInForm } from 'types/state.interfaces/forms-interface';
import { FORM_TYPES } from 'constants';
import { getFormsCommonReducer, getInitialFormState } from '../common';

const additionalState = {
  formData: {
    email: '',
    password: '',
  },
};

export const signIn = handleActions<ISignInForm, any>(
  {
    ...getFormsCommonReducer(FORM_TYPES.SIGN_IN, additionalState),
  },
  getInitialFormState(additionalState),
);
