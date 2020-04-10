import { combineReducers } from 'redux';

import { system } from './system';
import { coronavirus } from './coronavirus';

export const rootReducer = combineReducers({
  system,
  coronavirus,
});
