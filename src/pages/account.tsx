import { NextPage } from 'next';

import { withAuth } from 'helpers/with-auth';
import withResolveActions from 'helpers/with-resolve-actions';
import { Account as AccountLayout } from 'layouts/account/account';
import { wrapper } from 'store/store';

const Account: NextPage<{}> = AccountLayout;

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  await withAuth(ctx);
  await withResolveActions([])(ctx);

  return { props: ctx.store.getState() };
});

export default Account;
