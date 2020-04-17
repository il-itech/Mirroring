import { combineReducers } from 'redux';

import { signUp } from './sign-up';

export const forms = combineReducers({
  signUp,
});
