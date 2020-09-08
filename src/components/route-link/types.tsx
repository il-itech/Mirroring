import { ReactNode, ReactType, ReactEventHandler } from 'react';

export interface Props {
  to: string;
  as?: string | {};
  children: ReactNode;
  component?: ReactType;
  copmonentClassName?: string;
  linkProps?: {};
  disabled?: boolean;
  handleClick?: (e: ReactEventHandler) => void;
}
