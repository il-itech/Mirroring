import * as R from 'ramda';

export const serializeTable = R.compose(
  R.dropLast(1),
  R.map(R.values),
  R.map(R.omit(['ourid', 'source'])),
  R.values,
);
