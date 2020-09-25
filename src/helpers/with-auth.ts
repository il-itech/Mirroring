import { parseCookieOnServer, isAuth } from 'helpers/auth';
import { getConfig } from 'helpers/env';
import { setProfile } from 'actions/profile';
import { NextContextWithStore } from 'interfaces';

const api = getConfig('HTTP_API_URL');

export const withAuth = async (ctx: Promise<NextContextWithStore>): Promise<NextContextWithStore> => {
  const {
    store: { dispatch },
    req: { headers: { cookie } },
  } = await ctx;

  const token = parseCookieOnServer('accessToken', cookie);
  const response = await fetch(`${api}/auth/check-is-token-expired`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  });
  const result = await response.json();

  if (isAuth(result)) {
    dispatch(setProfile(result));
  }

  return ctx;
};
