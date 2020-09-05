import { handleActions } from 'redux-actions';

import { ISignUpForm } from 'types/state.interfaces/forms-interface';
import { FORM_TYPES } from 'constants';
import { getFormsCommonReducer, getInitialFormState } from '../common';

const additionalState = {
  formData: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  },
};

export const signUp = handleActions<ISignUpForm, any>(
  {
    ...getFormsCommonReducer(FORM_TYPES.SIGN_UP, additionalState),
  },
  getInitialFormState(additionalState),
);
