import { ReactNode } from 'react';

import { CustomHandleBlur, CustomHandleChange } from 'components/form-element/types';

export interface Props {
  field: string;
  label?: ReactNode;
  checked?: boolean;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  disableRipple?: boolean;
  icon?: ReactNode;
  checkedIcon?: ReactNode;
  formControlValue?: string;
  classes?: Record<string, string>;
  parentClasses?: Record<string, string>;
  inputProps?: {};
  handleChange?: CustomHandleChange;

  /** Generic props */
  variant?: 'filled' | 'outlined' | 'standard';
  handleBlur?: CustomHandleBlur;
  value?: string;
}
