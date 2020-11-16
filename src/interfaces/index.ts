import { GetServerSidePropsContext } from 'next-redux-wrapper';
import { Store, AnyAction } from 'redux';

import { IState } from './state.interfaces';

export type NextContext = GetServerSidePropsContext & {
  store: Store<IState, AnyAction>;
};

export type UnknownObjectType = Record<string, unknown>;
export type FormData = Record<string, string | number | boolean>;
export type FieldError = {
  message: string;
  values: Record<string, string | number>;
} | UnknownObjectType;
export type FormErrors = Record<string, FieldError>;
