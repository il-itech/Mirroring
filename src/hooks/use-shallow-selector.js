import { shallowEqual, useSelector } from 'react-redux';

export const useShallowSelector = selector => useSelector(selector, shallowEqual);
