import { createReducer } from 'deox';

import { FORM_TYPES } from 'enums';
import { getFormsCommonReducer, getInitialFormState } from '../common';

const initialState = getInitialFormState({
  formData: {},
});

export const chatMessage = createReducer(
  initialState,
  handleAction => ([
    ...getFormsCommonReducer(FORM_TYPES.CHAT_MESSAGE, initialState, handleAction),
  ]),
);
