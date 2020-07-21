import { combineReducers } from 'redux';

import { system } from './system';
import { coronavirus } from './coronavirus';
import { chat } from './chat';
import { forms } from './forms';
import { auth } from './auth';
import { profile } from './profile';

export const rootReducer = combineReducers({
  system,
  coronavirus,
  chat,
  forms,
  auth,
  profile,
});
