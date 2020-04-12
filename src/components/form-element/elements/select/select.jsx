import React, { Fragment } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

export const CustomSelect = ({
  // formType,
  field,
  // inputLabelText,
  formHelperText,
  options,
  classes,
  selectClassName,
  selectedValue,
  inputLabelClassName,
  MenuProps,
  formHelperTextClassName,
  handleChange,
}) => (
  <Fragment>
    <InputLabel
      className={inputLabelClassName}
    >
      {/* {inputLabelText} */}
    </InputLabel>
    <Select
      id={field}
      labelId={field}
      value={selectedValue || ''}
      className={selectClassName}
      onChange={handleChange}
      inputProps={{ name: field }}
      classes={classes}
      MenuProps={MenuProps}
    >
      {options.map(({
        id: optionId,
        value: optionValue,
      }) => (
        <MenuItem
          key={optionId}
          id={optionId}
          value={optionValue}
        >
          {optionValue}
        </MenuItem>
      ))}
    </Select>
    <FormHelperText className={formHelperTextClassName}>
      {formHelperText}
    </FormHelperText>
  </Fragment>
);

CustomSelect.propTypes = {
  // formType: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  // inputLabelText: PropTypes.string.isRequired,
  formHelperText: PropTypes.string,
  selectedValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  classes: PropTypes.shape({}),
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  })),
  MenuProps: PropTypes.shape({}),
  selectClassName: PropTypes.string,
  inputLabelClassName: PropTypes.string,
  formHelperTextClassName: PropTypes.string,
};

CustomSelect.defaultProps = {
  selectClassName: null,
  formHelperText: null,
  selectedValue: '',
  options: [],
  classes: {},
  MenuProps: {},
  inputLabelClassName: null,
  formHelperTextClassName: null,
};
