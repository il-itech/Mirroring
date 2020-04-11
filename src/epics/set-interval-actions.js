import { ofType } from 'redux-observable';
import { interval, of } from 'rxjs';
import { switchMap, mergeMap, takeUntil } from 'rxjs/operators';

import { setIntervalActions, clearIntervalActions } from '../actions/common';
import { catchGlobalErrorWithUndefinedId } from './common-operators';

const FIVE_MINUTE = 300000;

export const setIntervalActionsEpic = action$ =>
  action$.pipe(
    ofType(setIntervalActions),
    switchMap(({ payload: actions }) => interval(FIVE_MINUTE).pipe(
      mergeMap(() => of(
        ...actions.map(action => action()),
      )),
      takeUntil(
        action$.ofType(clearIntervalActions),
      ),
    )),
    catchGlobalErrorWithUndefinedId,
  );
