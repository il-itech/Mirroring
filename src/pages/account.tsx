import { NextPage } from 'next';

import { withAuth } from 'helpers/with-auth';
import withResolveActions from 'helpers/with-resolve-actions';
import { Account as AccountLayout } from 'layouts/account';
import { wrapper } from 'storage';
import { UnknownObjectType } from 'interfaces';

const Account: NextPage<UnknownObjectType> = AccountLayout;

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  await withAuth(ctx);
  await withResolveActions([])(ctx);

  return { props: ctx.store.getState() };
});

export default Account;
