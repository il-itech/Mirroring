import { combineReducers } from 'redux';

import { signUp } from './sign-up';
import { signIn } from './sign-in';
import { chatMessage } from './chat-message';
import { account } from './account';

export const forms = combineReducers({
  signUp,
  signIn,
  chatMessage,
  account,
});
