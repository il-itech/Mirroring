import { GetServerSidePropsContext } from 'next';
import { Store, AnyAction } from 'redux';

import { IState } from './state.interfaces';

export type NextContext = GetServerSidePropsContext & {
  store: Store<IState, AnyAction>;
};

export type FormData = { [key: string]: string | number | boolean };
export type FormErrors = { [key: string]: string | number | boolean };
export type FieldError = {
  message: string;
  values: { [key: string]: string | number };
} | {};
