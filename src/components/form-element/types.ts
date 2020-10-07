import { ReactNode, FocusEvent } from 'react';
import { InputLabelProps, InputProps } from '@material-ui/core';

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
    validation: [];
    classes?: {
      [key: string]: string;
    };
    InputLabelProps?: InputLabelProps;
    InputProps?: InputProps;
    selectedValue?: string;
    options?: {
      id: string;
      value: string | number;
    }[];
    [key: string]: string | number | {} | undefined;
  };
  parentProps?: {};
  variant?: 'filled' | 'outlined' | 'standard';
  customHandleChange?: CustomHandleChange;
  customHandleBlur?: CustomHandleBlur;
  value: string;
  isChecked?: boolean;
}
