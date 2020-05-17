import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';

import { isEmptyOrNil } from '../../../../helpers/utils';

export const CustomSwitch = ({
  field,
  label,
  className,
  handleChange,
}) => isEmptyOrNil(label)
  ? (
    <Switch
      name={field}
      className={className}
      onChange={handleChange}
    />
  ) : (
    <FormControlLabel
      label={label}
      control={(
        <Switch
          name={field}
          className={className}
          onChange={handleChange}
        />
      )}
    />
  );

CustomSwitch.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

CustomSwitch.defaultProps = {
  className: null,
};
