import { createReducer } from 'deox';

import { FORM_TYPES } from 'enums';
import { getFormsCommonReducer, getInitialFormState } from '../common';

const initialState = getInitialFormState({
  formData: {
    email: '',
  },
});

export const resetPassword = createReducer(
  initialState,
  handleAction => ([
    ...getFormsCommonReducer(FORM_TYPES.RESET_PASSWORD, initialState, handleAction),
  ]),
);
