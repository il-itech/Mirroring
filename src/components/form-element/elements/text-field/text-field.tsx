import { FC } from 'react';
import TextField from '@material-ui/core/TextField';

import { FORM_FIELD_TYPES } from 'enums';
import { Props } from './types';

export const CustomTextField: FC<Props> = ({
  type,
  field,
  label,
  placeholder,
  variant,
  autoFocus,
  hasError,
  helperText,
  classes,
  InputProps,
  InputLabelProps,
  inputProps,
  handleChange,
  handleBlur,
  value,
}) => (
  <TextField
    id={field}
    name={field}
    type={type}
    error={hasError}
    helperText={hasError && helperText}
    variant={variant}
    multiline={type === FORM_FIELD_TYPES.TEXTAREA}
    value={value}
    label={label}
    placeholder={placeholder}
    classes={classes}
    autoFocus={autoFocus}
    InputProps={InputProps}
    InputLabelProps={InputLabelProps}
    // eslint-disable-next-line react/jsx-no-duplicate-props
    inputProps={inputProps}
    onChange={handleChange}
    onBlur={handleBlur}
  />
);
