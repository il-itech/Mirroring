import { FC } from 'react';

import { Header } from 'components/header/header';
import { DrawerSideBar } from 'components/drawers/drawer-side-bar/drawer-side-bar';

export const Index: FC<{}> = () => (
  <div>
    <Header />
    <DrawerSideBar />
    <p>Hello NextJS</p>
  </div>
);
