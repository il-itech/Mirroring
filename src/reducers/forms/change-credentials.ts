import { createReducer } from 'deox';

import { FORM_TYPES } from 'enums';
import { getFormsCommonReducer, getInitialFormState } from '../common';

const initialState = getInitialFormState({
  formData: {
    firstname: '',
    lastname: '',
    email: '',
    country: '',
  },
});

export const changeCredentials = createReducer(
  initialState,
  handleAction => ([
    ...getFormsCommonReducer(FORM_TYPES.CHANGE_CREDENTIALS, initialState, handleAction),
  ]),
);
