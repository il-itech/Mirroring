import { combineReducers } from 'redux';

import { IState } from 'types/state.interfaces';
import { system } from './system';
import { coronavirus } from './coronavirus';
import { chat } from './chat';
import { forms } from './forms';
import { auth } from './auth';
import { profile } from './profile';

export const rootReducer = combineReducers<IState>({
  system,
  coronavirus,
  chat,
  forms,
  auth,
  profile,
});
