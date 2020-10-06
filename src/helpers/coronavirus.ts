import { IStats } from 'interfaces/state.interfaces/coronavirus-interface';
import * as R from 'ramda';

export const serializeTable = R.compose<
  { [key: number]: IStats },
  IStats[],
  IStats[],
  [string | number][],
  [string | number][]
>(
  R.dropLast(1),
  R.map<any, any>(R.values),
  R.map(R.omit(['ourid', 'source'])),
  R.values,
);
