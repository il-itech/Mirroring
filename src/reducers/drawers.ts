import { createReducer } from 'deox';

import { toggleDrawer, closeAllDrawers } from 'actions/drawers';

const initialState: { [key: string]: boolean } = {};

export const drawers = createReducer(
  initialState,
  handleAction => ([
    handleAction(toggleDrawer, (state, { payload: drawerId }) => ({
      ...state,
      [drawerId]: !state[drawerId],
    })),
    handleAction(closeAllDrawers, () => ({})),
  ]),
);
