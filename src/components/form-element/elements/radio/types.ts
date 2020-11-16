import { ReactNode } from 'react';

import { CustomHandleBlur, CustomHandleChange } from 'components/form-element/types';
import { UnknownObjectType } from 'interfaces';

export interface Props {
  field: string;
  label?: ReactNode;
  checked?: boolean;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  disableRipple?: boolean ;
  classes?: Record<string, string>;
  parentClasses?: Record<string, string>;
  inputProps?: UnknownObjectType;

  /** Generic props */
  variant?: 'filled' | 'outlined' | 'standard';
  handleChange?: CustomHandleChange;
  handleBlur?: CustomHandleBlur;
  value?: string;
}
