import { NextPage } from 'next';

import { Index as IndexLayout } from 'layouts';
import { withAuth } from 'helpers/with-auth';
import withResolveActions from 'helpers/with-resolve-actions';

const Index: NextPage<{}> = IndexLayout;

Index.getInitialProps = async (ctx) => {
  await withAuth(ctx);
  await withResolveActions([])(ctx);

  return { ...ctx.store.getState() };
};

export default Index;
