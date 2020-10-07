import { MenuProps } from '@material-ui/core/Menu';

import { CustomHandleBlur, CustomHandleChange } from 'components/form-element/types';

export interface Props {
  field: string;
  inputLabelText?: string;
  formHelperText?: string;
  selectedValue: string;
  selectClassName?: string;
  formHelperTextClassName?: string;
  inputLabelClassName?: string;
  classes?: {
    [key: string]: string;
  };
  options: {
    id: string;
    value: string | number;
  }[];
  MenuProps?: MenuProps;
  handleChange?: CustomHandleChange;

  /** Generic props */
  variant?: 'filled' | 'outlined' | 'standard';
  handleBlur?: CustomHandleBlur;
  value?: string;
}
