import { ReactNode, FocusEvent } from 'react';
import { InputLabelProps, InputProps } from '@material-ui/core';

import { UnknownObjectType } from 'interfaces';

export type CustomHandleChange = (
  event: React.ChangeEvent<{ name?: string; value?: string; checked?: boolean }>,
  child: ReactNode
) => void;
export type CustomHandleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

export interface Props {
  formType: string;
  field: string;
  className?: string;
  elementProps: {
    type: string;
    validation?: [];
    classes?: Record<string, string>;
    InputLabelProps?: InputLabelProps;
    InputProps?: InputProps;
    selectedValue?: string;
    placeholder?: string;
    variant?: string;
    options?: {
      id: string;
      value: string | number;
    }[];
  };
  parentProps?: UnknownObjectType;
  variant?: 'filled' | 'outlined' | 'standard';
  customHandleChange?: CustomHandleChange;
  customHandleBlur?: CustomHandleBlur;
  value: string;
  isChecked?: boolean;
}
