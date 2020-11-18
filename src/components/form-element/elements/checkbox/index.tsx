import { FC } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { isEmptyOrNil } from 'helpers/utils';
import { Props } from './types';

export const CustomCheckbox: FC<Props> = ({
  field,
  label,
  checked,
  labelPlacement,
  disableRipple,
  icon,
  checkedIcon,
  formControlValue,
  classes,
  parentClasses,
  inputProps,
  handleChange,
}) => isEmptyOrNil(label)
  ? (
    <Checkbox
      name={field}
      checked={checked}
      disableRipple={disableRipple}
      onChange={handleChange}
      classes={classes}
      icon={icon}
      checkedIcon={checkedIcon}
      inputProps={inputProps}
    />
  ) : (
    <FormControlLabel
      label={label}
      value={formControlValue}
      labelPlacement={labelPlacement}
      classes={parentClasses}
      control={(
        <Checkbox
          name={field}
          checked={checked}
          disableRipple={disableRipple}
          onChange={handleChange}
          classes={classes}
          icon={icon}
          checkedIcon={checkedIcon}
          inputProps={inputProps}
        />
      )}
    />
  );
