import { ReactNode } from 'react';

import { CustomHandleBlur, CustomHandleChange } from 'components/form-element/types';

export interface Props {
  field: string;
  label?: ReactNode;
  handleChange?: CustomHandleChange;

  /** Generic props */
  variant?: 'filled' | 'outlined' | 'standard';
  handleBlur?: CustomHandleBlur;
  value?: string;
}
