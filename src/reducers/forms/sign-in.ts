import { createReducer } from 'deox';

import { FORM_TYPES } from 'enums';
import { getFormsCommonReducer, getInitialFormState } from '../common';

const initialState = getInitialFormState({
  formData: {
    email: '',
    password: '',
  },
});

export const signIn = createReducer(
  initialState,
  handleAction => ([
    ...getFormsCommonReducer(FORM_TYPES.SIGN_IN, initialState, handleAction),
  ]),
);
