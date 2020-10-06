import { interval, Observable, of } from 'rxjs';
import { switchMap, mergeMap, takeUntil } from 'rxjs/operators';
import { ActionType, ofType } from 'deox';

import { setIntervalActions, clearIntervalActions } from 'actions/common';
import { catchGlobalErrorWithUndefinedId } from './common-operators';

const FIVE_MINUTE = 300000;

type Action = ActionType<
  typeof setIntervalActions |
  typeof clearIntervalActions
>;

export const setIntervalActionsEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(setIntervalActions),
    switchMap(({ payload: actions }) => interval(FIVE_MINUTE).pipe(
      mergeMap(() => of(
        ...actions.map(action => action()),
      )),
      takeUntil(
        action$.pipe(ofType(clearIntervalActions)),
      ),
    )),
    catchGlobalErrorWithUndefinedId,
  );
