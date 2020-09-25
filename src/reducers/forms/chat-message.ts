import { handleActions } from 'redux-actions';

import { IChatMessageForm } from 'interfaces/state.interfaces/forms.interfaces/form-chat-message.interface';
import { FORM_TYPES } from 'enums';
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
