import { GetServerSidePropsContext } from 'next';
import { Store } from 'redux';

import { IState } from './state.interfaces';

export type NextContextWithStore = GetServerSidePropsContext & { store: Store<IState> };
export type FormData = { [key: string]: string | number | boolean }
export type FormErrors = { [key: string]: string | number | boolean }
