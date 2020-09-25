import * as R from 'ramda';

import { Index as IndexLayout } from 'layouts';
import { withAuth } from 'helpers/with-auth';
import { withProps } from 'helpers/with-props';
import withResolveActions from 'helpers/with-resolve-actions';

const Index = IndexLayout;

export const getServerSideProps = R.compose(
  withProps,
  withAuth,
  withResolveActions([]),
);

export default Index;
