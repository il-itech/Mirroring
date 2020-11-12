import { StateObservable } from 'redux-observable';
import { of, Subject } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { Action } from 'deox';

import { rootEpic } from 'epics';
import { initializeState } from 'actions/system';
import { NextContext } from 'interfaces';

const DEFAULT_TIMEOUT = 15000;
const FAILURE_ACTION = { type: '@@ndo/failure_action' };

const makeArray = <T>(item: T[] | T): T[] => Array.isArray(item) ? item : [item];
const failureAction = <T>(error: T): Action<string, { error: T }> => ({ ...FAILURE_ACTION, payload: { error } });

/**
 * Method responsible for getting all actions needed to be processed
 * and resolve a promise in the inner funciton when all of the epics finish.
 *
 * @param {Array | Object} - array of actions to dispatch
 * @param {Integer} - (optional) timeout applied to all stream provided (default: 30 sec)
 */

const withResolveActions = (
  actions: Action<any>[],
  tout = DEFAULT_TIMEOUT,
) => async ({ store }: NextContext) => {
  const state$ = new StateObservable(new Subject(), store.getState());

  const resultActions = await Promise.all(
    makeArray(actions)
      .map(action => ({ ...action }))
      .map(action => rootEpic(of(action), state$)
        .pipe(timeout(tout))
        .toPromise()
        .catch(failureAction)),
  );

  store.dispatch(initializeState());
  resultActions.forEach(action => store.dispatch({ ...action }));
};

export default withResolveActions;
