import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';

import { isEmptyOrNil } from 'helpers/utils';

export const CustomCheckbox = ({
  field,
  label,
  checked,
  labelPlacement,
  disableRipple,
  icon,
  checkedIcon,
  formControlValue,
  className,
  elementClasses,
  parentClasses,
  inputProps,
  handleChange,
}) => isEmptyOrNil(label)
  ? (
    <Checkbox
      name={field}
      checked={checked}
      className={className}
      disableRipple={disableRipple}
      onChange={handleChange}
      classes={elementClasses}
      icon={icon}
      checkedIcon={checkedIcon}
      inputProps={inputProps}
    />
  ) : (
    <FormControlLabel
      label={label}
      value={formControlValue}
      className={className}
      labelPlacement={labelPlacement}
      classes={parentClasses}
      control={(
        <Checkbox
          name={field}
          checked={checked}
          className={className}
          disableRipple={disableRipple}
          onChange={handleChange}
          classes={elementClasses}
          icon={icon}
          checkedIcon={checkedIcon}
          inputProps={inputProps}
        />
      )}
    />
  );

CustomCheckbox.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  labelPlacement: PropTypes.string,
  formControlValue: PropTypes.string,
  className: PropTypes.string,
  disableRipple: PropTypes.bool,
  icon: PropTypes.node,
  checkedIcon: PropTypes.node,
  elementClasses: PropTypes.shape({}).isRequired,
  parentClasses: PropTypes.shape({}),
  inputProps: PropTypes.shape({}),
  handleChange: PropTypes.func.isRequired,
};

CustomCheckbox.defaultProps = {
  className: null,
  checked: false,
  label: null,
  icon: null,
  checkedIcon: null,
  disableRipple: true,
  parentClasses: {},
  formControlValue: 'value',
  labelPlacement: 'start',
  inputProps: {},
};
