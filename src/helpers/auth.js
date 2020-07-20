import store from 'store';
import * as R from 'ramda';

export const getToken = () => R.prop('accessToken', store.get('user'));
