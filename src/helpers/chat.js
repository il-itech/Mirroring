import hash from 'object-hash';
import * as R from 'ramda';

export const getLastMessage = (_id, messages) =>
  R.compose(R.prop('message'), R.last, R.propOr([], _id))(messages) || '...';

export const getRoomHash = (profileId, roomId) => hash({
  [profileId]: null,
  [roomId]: null,
});
