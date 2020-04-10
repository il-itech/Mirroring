import * as R from 'ramda';

export const isNotNil = R.complement(R.isNil);
export const isNotEmpty = R.complement(R.isEmpty);
export const isEmptyOrNil = R.anyPass([R.isNil, R.isEmpty]);
export const zeroOrNil = R.anyPass([R.isNil, R.compose(R.equals(0), Number)]);

export const isFunction = type => R.type(type) === 'Function';

/**
 * Converts passed value to `String` type (if needed)
 */
export const toString = R.cond([
  [R.isNil, R.always('')],
  [R.is(String), R.identity],
  [R.T, R.toString],
]);

/**
 * Removes functions from React Component's `props` object
 * @param {Object} props
 * @returns {Object}
 */
export const omitFunctionsFromComponentProps = (props) => {
  const keys = [];

  R.forEach(key =>
    isFunction(props[key])
      && keys.push(key), R.keys(props));

  return R.omit(keys, props);
};

/**
 * Checks whether the React Component's `props` and `nextProps` objects are equal ones
 * @param props
 * @param nextProps
 * @returns {boolean}
 */
export const areEqualComponentProps = (props, nextProps) => R.equals(
  omitFunctionsFromComponentProps(props),
  omitFunctionsFromComponentProps(nextProps),
);

export const getMonetaryValue = R.compose(
  R.reverse,
  R.join(','),
  R.splitEvery(3),
  R.reverse,
  toString,
);
