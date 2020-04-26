import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import { FORM_FIELD_TYPES } from '../../../../constants';

export const CustomTextField = ({
  type,
  field,
  label,
  placeholder,
  variant,
  autoFocus,
  classes,
  className,
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
    variant={variant}
    multiline={type === FORM_FIELD_TYPES.TEXTAREA}
    value={value}
    label={label}
    placeholder={placeholder}
    classes={classes}
    className={className}
    autoFocus={autoFocus}
    InputProps={InputProps}
    InputLabelProps={InputLabelProps}
    // eslint-disable-next-line react/jsx-no-duplicate-props
    inputProps={inputProps}
    onChange={handleChange}
    onBlur={handleBlur}
  />
);

CustomTextField.propTypes = {
  type: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  classes: PropTypes.shape({}),
  className: PropTypes.string,
  InputProps: PropTypes.shape({}),
  InputLabelProps: PropTypes.shape({}),
  inputProps: PropTypes.shape({}),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  value: PropTypes.string,
};

CustomTextField.defaultProps = {
  classes: null,
  className: null,
  label: '',
  placeholder: '',
  autoFocus: true,
  InputProps: {},
  InputLabelProps: {},
  inputProps: {},
  handleBlur: null,
  value: '',
};
