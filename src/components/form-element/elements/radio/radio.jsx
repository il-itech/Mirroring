import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';

import { isEmptyOrNil } from '../../../../helpers/utils';
// import { IconCheckItem } from '../../../icons/icon-check-item';

export const CustomRadio = ({
  field,
  label,
  labelPlacement,
  className,
  elementClasses,
  parentClasses,
  disableRipple,
  // icon,
  // checkedIcon,
  inputProps,
  checked,
}) => isEmptyOrNil(label)
  ? (
    <Radio
      name={field}
      value={field}
      className={className}
      classes={elementClasses}
      disableRipple={disableRipple}
      // icon={icon}
      // checkedIcon={checkedIcon}
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
          className={className}
          classes={elementClasses}
          disableRipple={disableRipple}
          // icon={icon}
          // checkedIcon={checkedIcon}
          inputProps={inputProps}
        />
      )}
    />
  );

CustomRadio.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelPlacement: PropTypes.string,
  className: PropTypes.string,
  disableRipple: PropTypes.bool,
  // icon: PropTypes.node,
  // checkedIcon: PropTypes.node,
  elementClasses: PropTypes.shape({}).isRequired,
  parentClasses: PropTypes.shape({}).isRequired,
  inputProps: PropTypes.shape({}),
  checked: PropTypes.bool,
};

CustomRadio.defaultProps = {
  className: null,
  disableRipple: true,
  // icon: IconCheckItem,
  // checkedIcon: IconCheckItem,
  labelPlacement: 'start',
  inputProps: {},
  checked: false,
};
