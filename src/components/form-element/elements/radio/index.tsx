import { FC } from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { isEmptyOrNil } from 'helpers/utils';
import { Props } from './types';

export const CustomRadio: FC<Props> = ({
  field,
  label,
  labelPlacement,
  classes,
  parentClasses,
  disableRipple,
  inputProps,
  checked,
}) => isEmptyOrNil(label)
  ? (
    <Radio
      name={field}
      value={field}
      classes={classes}
      disableRipple={disableRipple}
      checked={checked}
      inputProps={inputProps}
    />
  ) : (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      classes={parentClasses}
      checked={checked}
      control={(
        <Radio
          name={field}
          value={field}
          classes={classes}
          disableRipple={disableRipple}
          inputProps={inputProps}
        />
      )}
    />
  );
