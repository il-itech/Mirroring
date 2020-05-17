import { of, Subject } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { StateObservable } from 'redux-observable';

const DEFAULT_TIMEOUT = 15000;
const FAILURE_ACTION = { type: '@@ndo/failure_action' };

const makeArray = item => Array.isArray(item) ? item : [item];
const failureAction = error => ({ ...FAILURE_ACTION, payload: { error } });

/**
 * Method responsible for getting all actions needed to be processed
 * and resolve a promise in the inner funciton when all of the epics finish.
 *
 * @param {Array | Object} - array of actions to dispatch
 * @param {Integer} - (optional) timeout applied to all stream provided (default: 30 sec)
 * @return {Function} - function expected by getInitialProps when using next-redux-wrapper.
 * https://github.com/mquintal/next-redux-observable/blob/master/src/resolve-actions.js
 */
export const resolveActions = (actions, tout = DEFAULT_TIMEOUT) => async ({ store, isServer = false, rootEpic }) => {
  const state$ = new StateObservable(new Subject(), store.getState());

  const resultActions = await Promise.all(
    makeArray(actions)
      .map(action => ({ ...action, isServer }))
      .map(action => rootEpic(of(action), state$)
        .pipe(timeout(tout))
        .toPromise()
        .catch(failureAction)),
  );

  resultActions.forEach(action => store.dispatch({ ...action, isServer }));

  return store.getState();
};
