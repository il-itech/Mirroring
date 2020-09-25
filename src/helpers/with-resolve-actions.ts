import { of } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { Action } from 'redux-actions';
import { GetServerSidePropsContext } from 'next';
import * as R from 'ramda';

import { initializeStore } from 'store/store';
import { rootEpic } from 'epics';
import { NextContextWithStore } from 'interfaces';

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
 * @return {Object} - next context with redux store
 */
const withResolveActions = async (
  actions: Action<any>[],
  ctx: GetServerSidePropsContext,
  tout = DEFAULT_TIMEOUT,
): Promise<NextContextWithStore> => {
  const store = initializeStore({});

  const resultActions = await Promise.all(
    makeArray(actions)
      .map(action => ({ ...action }))
      .map(action => rootEpic(of(action))
        .pipe(timeout(tout))
        .toPromise()
        .catch(failureAction)),
  );

  resultActions.forEach(action => store.dispatch({ ...action }));

  return { ...ctx, store };
};

export default R.curry(withResolveActions);
