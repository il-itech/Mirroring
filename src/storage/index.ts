import {
  createStore, applyMiddleware, Reducer, AnyAction,
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';

import { rootEpic } from 'epics';
import { rootReducer } from 'reducers';
import { IS_MODE_DEV } from 'enums';
import { IState } from 'interfaces/state.interfaces';

const makeStore = () => {
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    rootReducer as Reducer<IState, AnyAction>,
    IS_MODE_DEV
      ? composeWithDevTools(applyMiddleware(epicMiddleware))
      : applyMiddleware(epicMiddleware),
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export const wrapper = createWrapper(makeStore);
