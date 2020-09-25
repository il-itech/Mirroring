import * as R from 'ramda';

import { withAuth } from 'helpers/with-auth';
import { withProps } from 'helpers/with-props';
import withResolveActions from 'helpers/with-resolve-actions';
import { Account as AccountLayout } from 'layouts/account/account';

const Account = AccountLayout;

export const getServerSideProps = R.compose(
  withProps,
  withAuth,
  withResolveActions([]),
);

export default Account;
