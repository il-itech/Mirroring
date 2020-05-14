import { combineReducers } from 'redux';

import { system } from './system';
import { coronavirus } from './coronavirus';
import { messenger } from './messenger';
import { forms } from './forms';
import { auth } from './auth';

export const rootReducer = combineReducers({
  system,
  coronavirus,
  messenger,
  forms,
  auth,
});
