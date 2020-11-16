import { ReactType, ReactEventHandler } from 'react';

import { UnknownObjectType } from 'interfaces';

export interface Props {
  to: string;
  children: JSX.Element | JSX.Element[] | string;
  component?: ReactType;
  copmonentClassName?: string;
  linkProps?: UnknownObjectType;
  disabled?: boolean;
  handleClick?: ReactEventHandler;
}
