import { ReactType, ReactEventHandler } from 'react';

export interface Props {
  to: string;
  as?: string | {};
  children: JSX.Element | JSX.Element[] | string;
  component?: ReactType;
  copmonentClassName?: string;
  linkProps?: {};
  disabled?: boolean;
  handleClick?: (e: ReactEventHandler) => void;
}
