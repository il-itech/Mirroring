import { GetServerSidePropsContext } from 'next';
import { CombinedState, Store, AnyAction } from 'redux';

import { IState } from './state.interfaces';

export type NextContextWithStore = GetServerSidePropsContext & {
  store: Store<any, AnyAction> | Store<CombinedState<IState>, AnyAction>;
};

export type FormData = { [key: string]: string | number | boolean }
export type FormErrors = { [key: string]: string | number | boolean }
