import { handleActions } from 'redux-actions';

import { ISignUpForm } from 'interfaces/state.interfaces/forms.interfaces/form-sign-up.interface';
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
