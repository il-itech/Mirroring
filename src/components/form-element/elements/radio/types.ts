import { ReactNode } from 'react';

import { CustomHandleBlur, CustomHandleChange } from 'components/form-element/types';

export interface Props {
  field: string;
  label?: ReactNode;
  checked?: boolean;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  disableRipple?: boolean ;
  classes?: {
    [key: string]: string;
  };
  parentClasses?: {
    [key: string]: string;
  };
  inputProps?: {};

  /** Generic props */
  variant?: 'filled' | 'outlined' | 'standard';
  handleChange?: CustomHandleChange;
  handleBlur?: CustomHandleBlur;
  value?: string;
}
