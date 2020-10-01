import cookies from 'js-cookie';
import * as R from 'ramda';

export const getToken = () => cookies.get('accessToken');

export const parseCookieOnServer = (value: string, str: string): string | null => R.ifElse(
  R.test(new RegExp(value)),
  R.compose(
    R.head,
    R.split(';'),
    R.last,
    R.split('accessToken='),
  ),
  R.always(null),
)(str);

export const isAuth = R.ifElse(
  R.has('_id'),
  R.T,
  R.F,
);
