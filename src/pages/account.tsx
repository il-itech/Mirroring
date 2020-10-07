import { NextPage } from 'next';

import { withAuth } from 'helpers/with-auth';
import withResolveActions from 'helpers/with-resolve-actions';
import { Account as AccountLayout } from 'layouts/account/account';

const Account: NextPage<{}> = AccountLayout;

Account.getInitialProps = async (ctx) => {
  await withAuth(ctx);
  await withResolveActions([])(ctx);

  return { ...ctx.store.getState() };
};

export default Account;
