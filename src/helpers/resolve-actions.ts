import { NextPageContext } from 'next';
import { of, Subject, Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { StateObservable, ActionsObservable } from 'redux-observable';
import { Action } from 'redux-actions';
import { IState } from 'interfaces/state.interfaces';

export interface NextContext extends NextPageContext {
  rootEpic: <T>(action: Observable<T>, state: StateObservable<IState>) => ActionsObservable<any>;
}

const DEFAULT_TIMEOUT = 15000;
const FAILURE_ACTION = { type: '@@ndo/failure_action' };

const makeArray = <T>(item: T[] | T): T[] => Array.isArray(item) ? item : [item];
const failureAction = <T>(error: T): Action<{ error: T }> => ({ ...FAILURE_ACTION, payload: { error } });

/**
 * Method responsible for getting all actions needed to be processed
 * and resolve a promise in the inner funciton when all of the epics finish.
 *
 * @param {Array | Object} - array of actions to dispatch
 * @param {Integer} - (optional) timeout applied to all stream provided (default: 30 sec)
 * @return {Function} - function expected by getInitialProps when using next-redux-wrapper.
 * https://github.com/mquintal/next-redux-observable/blob/master/src/resolve-actions.js
 */
export const resolveActions = (actions: Action<any>[], tout = DEFAULT_TIMEOUT) =>
  async ({ store, isServer = false, rootEpic }: NextContext): Promise<IState> => {
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
