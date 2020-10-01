import { useMemo } from 'react';
import { createStore, applyMiddleware, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootEpic } from 'epics';
import { rootReducer } from 'reducers';
import { IState } from 'interfaces/state.interfaces';
import { IS_MODE_DEV } from 'enums';

let store: Store | undefined;

const initStore = (initialState: {}) => {
  const epicMiddleware = createEpicMiddleware();
  const reduxMiddleware = IS_MODE_DEV
    ? composeWithDevTools(applyMiddleware(epicMiddleware))
    : applyMiddleware(epicMiddleware);

  const _store = createStore(rootReducer, initialState, reduxMiddleware);

  epicMiddleware.run(rootEpic);

  return _store;
};

export const initializeStore = (preloadedState: {}) => {
  let _store = store ?? initStore(preloadedState);

  /**
   * After navigating to a page with an initial Redux state, merge that state
   * with the current state in the store, and create a new store
  */
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    /** Reset the current store */
    store = undefined;
  }

  /** For SSG and SSR always create a new store */
  if (typeof window === 'undefined') return _store;

  /** Create the store once in the client */
  if (!store) store = _store;

  return _store;
};

export const useStore = (initialState: IState) => {
  const _store = useMemo(() => initializeStore(initialState), [initialState]);

  return _store;
};
