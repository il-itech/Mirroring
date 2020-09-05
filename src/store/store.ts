import { createStore, applyMiddleware, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootEpic } from 'epics';
import { rootReducer } from 'reducers';
import { IS_MODE_DEV } from 'constants';

const configureStore = (initialState = {}): Store => {
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    IS_MODE_DEV
      ? composeWithDevTools(applyMiddleware(epicMiddleware))
      : applyMiddleware(epicMiddleware),
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
