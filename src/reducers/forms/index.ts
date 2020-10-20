import { combineReducers } from 'redux';

import { signUp } from './sign-up';
import { signIn } from './sign-in';
import { chatMessage } from './chat-message';
import { changeCredentials } from './change-credentials';
import { changePassword } from './change-password';
import { resetPassword } from './resetPassword';

export const forms = combineReducers({
  signUp,
  signIn,
  chatMessage,
  changeCredentials,
  changePassword,
  resetPassword,
});
