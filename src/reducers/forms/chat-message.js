import { handleActions } from 'redux-actions';

import { getFormsCommonReducer, getInitialState } from './common';
import { FORM_TYPES } from '../../constants';

const additionalState = {
  formData: {
    chatMessage: '',
  },
};

export const chatMessage = handleActions(
  {
    ...getFormsCommonReducer(FORM_TYPES.CHAT_MESSAGE, additionalState),
  },
  getInitialState(additionalState),
);
