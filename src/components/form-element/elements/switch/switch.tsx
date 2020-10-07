import { FC } from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { isEmptyOrNil } from 'helpers/utils';
import { Props } from './types';

export const CustomSwitch: FC<Props> = ({
  field,
  label,
  handleChange,
}) => isEmptyOrNil(label)
  ? (
    <Switch
      name={field}
      onChange={handleChange}
    />
  ) : (
    <FormControlLabel
      label={label}
      control={(
        <Switch
          name={field}
          onChange={handleChange}
        />
      )}
    />
  );
