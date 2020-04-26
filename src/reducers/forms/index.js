import { combineReducers } from 'redux';

import { signUp } from './sign-up';
import { signIn } from './sign-in';

export const forms = combineReducers({
  signUp,
  signIn,
});
