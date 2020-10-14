import { createActionCreator } from 'deox';

export const toggleDrawer = createActionCreator(
  'TOGGLE_DRAWER',
  resolve => (drawerId: string) => resolve(drawerId),
);

export const closeAllDrawers = createActionCreator('CLOSE_ALL_DRAWERS');
