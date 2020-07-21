import * as R from 'ramda';

export const getLastMessage = (_id, messages) =>
  R.compose(R.prop('message'), R.last, R.propOr([], _id))(messages) || '...';
