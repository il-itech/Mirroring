import { createActionCreator } from 'deox';

export const toggleDrawer = createActionCreator(
  'TOGGLE_DRAWER',
  resolve => (drawerId: string) => resolve(drawerId),
);
