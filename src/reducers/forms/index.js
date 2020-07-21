import { combineReducers } from 'redux';

import { signUp } from './sign-up';
import { signIn } from './sign-in';
import { chatMessage } from './chat-message';

export const forms = combineReducers({
  signUp,
  signIn,
  chatMessage,
});
