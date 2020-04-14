import { combineReducers } from 'redux';

import { system } from './system';
import { coronavirus } from './coronavirus';
import { messenger } from './messenger';

export const rootReducer = combineReducers({
  system,
  coronavirus,
  messenger,
});
