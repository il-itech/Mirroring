import { ReactType } from 'react';

export interface Tab {
  id: number;
  value: string;
}

export interface TabPanel {
  id: number;
  Component: ReactType;
}

export interface Props {
  tabs: Tab[];
  tabPanels: TabPanel[];
}
