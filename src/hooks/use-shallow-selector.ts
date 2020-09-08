import { shallowEqual, useSelector } from 'react-redux';
import { IState } from 'interfaces/state.interfaces';

type Selector<T> = (state: IState) => T;

export const useShallowSelector = <T>(selector: Selector<T>): T =>
  useSelector<IState, T>(selector, shallowEqual);
