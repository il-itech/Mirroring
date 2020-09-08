import { ReactType } from 'react';

export interface Props {
  children: ReactType;
  dismissGlobalAlert: () => void;
}
