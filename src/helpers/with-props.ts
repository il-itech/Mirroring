import { NextContextWithStore } from 'interfaces';
import { IState } from 'interfaces/state.interfaces';

export const withProps = async (ctx: Promise<NextContextWithStore>): Promise<{ props: IState }> => {
  const { store } = await ctx;

  return { props: { ...store.getState() } };
};
