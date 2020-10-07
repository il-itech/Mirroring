import { ReactNode } from 'react';
import { InputProps, InputLabelProps } from '@material-ui/core';

import { CustomHandleBlur, CustomHandleChange } from 'components/form-element/types';

export interface Props {
  type: string;
  field: string;
  label?: ReactNode;
  placeholder?: string;
  value: string;
  variant?: 'filled' | 'outlined' | 'standard';
  autoFocus?: boolean;
  hasError?: boolean;
  helperText?: string;
  classes?: {
    [key: string]: string;
  };
  InputProps: InputProps;
  InputLabelProps: InputLabelProps;
  inputProps: {};
  handleChange: CustomHandleChange;
  handleBlur?: CustomHandleBlur;
}
