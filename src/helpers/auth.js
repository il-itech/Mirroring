import store from 'store';
import * as R from 'ramda';

export const getToken = () => R.prop('token', store.get('user'));