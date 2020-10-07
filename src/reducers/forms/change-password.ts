import { createReducer } from 'deox';

import { FORM_TYPES } from 'enums';
import { getFormsCommonReducer, getInitialFormState } from '../common';

const initialState = getInitialFormState({
  formData: {
    password: '',
    passwordConfirmation: '',
  },
});

export const changePassword = createReducer(
  initialState,
  handleAction => ([
    ...getFormsCommonReducer(FORM_TYPES.CHANGE_PASSWORD, initialState, handleAction),
  ]),
);
