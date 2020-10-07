import { createActionCreator } from 'deox';

import { IProfile } from 'interfaces/state.interfaces/profile-interface';

export const setProfile = createActionCreator(
  'SET_PROFILE',
  resolve => (profile: IProfile) => resolve(profile),
);
