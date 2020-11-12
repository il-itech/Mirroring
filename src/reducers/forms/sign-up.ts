import { createReducer } from 'deox';

import { FORM_TYPES } from 'enums';
import { getFormsCommonReducer, getInitialFormState } from '../common';

const initialState = getInitialFormState({
  formData: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  },
});

export const signUp = createReducer(
  initialState,
  handleAction => ([
    ...getFormsCommonReducer(FORM_TYPES.SIGN_UP, initialState, handleAction),
  ]),
);
