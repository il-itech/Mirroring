import { IState } from 'interfaces/state.interfaces';
import { AnyAction, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { diff } from 'jsondiffpatch';
import * as R from 'ramda';

import { isEmptyOrNil } from 'helpers/utils';
import { system } from './system';
import { drawers } from './drawers';
import { coronavirus } from './coronavirus';
import { chat } from './chat';
import { forms } from './forms';
import { auth } from './auth';
import { profile } from './profile';

export const combinedReducer = combineReducers({
  system,
  drawers,
  coronavirus,
  chat,
  forms,
  auth,
  profile,
});

const concatValues = (
  key: string,
  leftValue: string | unknown[],
  rightValue: string | unknown[],
) => Array.isArray(key) ? R.concat(leftValue, rightValue) : rightValue;

export const rootReducer = (state: IState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const stateDiff = diff(state, action.payload) as any;
    const wasBumpedOnClient = !isEmptyOrNil(stateDiff) && action.payload.system.initializedSSRState;

    return wasBumpedOnClient ? {
      ...R.mergeDeepWithKey(
        concatValues,
        state,
        action.payload,
      ),
    } : {
      ...state,
    };
  }

  return combinedReducer(state, action);
};
