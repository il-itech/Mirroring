import { handleActions } from 'redux-actions';

import { FORM_TYPES } from 'constants';
import { getFormsCommonReducer, getInitialState } from './common';

const additionalState = {
  formData: {},
};

export const chatMessage = handleActions(
  {
    ...getFormsCommonReducer(FORM_TYPES.CHAT_MESSAGE, additionalState),
  },
  getInitialState(additionalState),
);
