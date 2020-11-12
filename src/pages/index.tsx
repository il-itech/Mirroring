import { NextPage } from 'next';

import { Index as IndexLayout } from 'layouts';
import { withAuth } from 'helpers/with-auth';
import withResolveActions from 'helpers/with-resolve-actions';
import { wrapper } from 'store/store';

const Index: NextPage<{}> = IndexLayout;

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  await withAuth(ctx);
  await withResolveActions([])(ctx);

  return { props: ctx.store.getState() };
});

export default Index;
