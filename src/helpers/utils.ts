import * as R from 'ramda';

export const isNotNil = R.complement(R.isNil);
export const isNotEmpty = R.complement(R.isEmpty);
export const isEmptyOrNil = R.anyPass([R.isNil, R.isEmpty]);
export const zeroOrNil = R.anyPass([R.isNil, R.compose(R.equals(0), Number)]);
export const isFunction = R.is(Function);
export const isBoolean = R.is(Boolean);

/**
 * Converts passed value to `String` type (if needed)
 */
export const toString = R.cond([
  [R.isNil, R.always('')],
  [R.is(String), R.identity],
  [R.T, R.toString],
]);

export const getMonetaryValue = R.compose(
  R.reverse,
  R.join(','),
  R.splitEvery(3),
  R.reverse,
  toString,
);

/**
 * @param {ParsedUrlQuery} query
 */
export const getQueryString = (
  query: string | string[] | undefined = '',
): string => R.is(Array, query) ? query[0] : query;
