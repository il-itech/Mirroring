import { handleActions } from 'redux-actions';

import { IChatMessageForm } from 'types/state.interfaces/forms-interface';
import { FORM_TYPES } from 'constants';
import { getFormsCommonReducer, getInitialFormState } from '../common';

const additionalState = {
  formData: {},
};

export const chatMessage = handleActions<IChatMessageForm, any>(
  {
    ...getFormsCommonReducer(FORM_TYPES.CHAT_MESSAGE, additionalState),
  },
  getInitialFormState(additionalState),
);
