import { combineReducers } from 'redux';

import { IForms } from 'interfaces/state.interfaces/forms.interfaces/forms-interface';
import { signUp } from './sign-up';
import { signIn } from './sign-in';
import { chatMessage } from './chat-message';
import { changeCredentials } from './change-credentials';
import { changePassword } from './change-password';

export const forms = combineReducers<IForms>({
  signUp,
  signIn,
  chatMessage,
  changeCredentials,
  changePassword,
});
