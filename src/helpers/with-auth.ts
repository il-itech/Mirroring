import { parseCookieOnServer, isAuth } from 'helpers/auth';
import { getConfig } from 'helpers/env';
import { setProfile } from 'actions/profile';
import { setAccessToken } from 'actions/system';
import { NextContext } from 'interfaces';

const api = getConfig('HTTP_API_URL');

export const withAuth = async ({ store, req }: NextContext) => {
  const token = parseCookieOnServer('accessToken', req?.headers?.cookie ?? '');
  const response = await fetch(`${api}/auth/check-is-token-expired`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  });
  const result = await response.json();

  if (isAuth(result)) {
    store.dispatch(setAccessToken(token as string));
    store.dispatch(setProfile(result));
  }
};
