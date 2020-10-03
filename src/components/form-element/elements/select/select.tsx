import React, { FC, Fragment } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

import { Props } from './types';

export const CustomSelect: FC<Props> = ({
  field,
  inputLabelText,
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
      {inputLabelText}
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
