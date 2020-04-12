import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import elements from './elements';
import { setFormData } from '../../actions/forms/common';
import { FORM_FIELD_TYPES, FORM_TARGET_VALUES_SERIALIZE } from '../../constants';

const {
  RADIO,
  SELECT,
  SWITCH,
  CHECKBOX,
  TEXT,
  PASSWORD,
  TEXTAREA,
} = FORM_FIELD_TYPES;

const {
  CustomRadio,
  CustomSelect,
  CustomSwitch,
  CustomCheckbox,
  CustomTextField,
} = elements;

const getElement = R.cond([
  [R.equals(RADIO), R.always(CustomRadio)],
  [R.equals(SELECT), R.always(CustomSelect)],
  [R.equals(SWITCH), R.always(CustomSwitch)],
  [R.equals(CHECKBOX), R.always(CustomCheckbox)],
  [type => R.includes(type, [TEXT, PASSWORD, TEXTAREA]), R.always(CustomTextField)],
  [R.T, R.always(null)],
]);

export const FormElement = ({
  formType,
  field,
  className,
  elementProps,
  parentProps,
  customHandleChange,
  handleBlur,
  value,
  isChecked,
  // errors,
}) => {
  const { type: elementType } = elementProps;
  const Element = getElement(elementType);
  const dispatch = useDispatch();
  const handleChange = useCallback(
    R.compose(
      dispatch,
      ({
        target: {
          name,
          [FORM_TARGET_VALUES_SERIALIZE[elementType]]: formValue,
        },
      }) => setFormData(formType, { [name]: formValue }),
    ),
    [dispatch],
  );

  return (
    <Element
      formType={formType}
      className={className}
      field={field}
      handleChange={customHandleChange || handleChange}
      handleBlur={handleBlur}
      value={value}
      checked={isChecked}
      {...elementProps}
      {...parentProps}
      // errors={errors}
    />
  );
};

FormElement.propTypes = {
  formType: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  customHandleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  className: PropTypes.string,
  elementProps: PropTypes.shape({
    type: PropTypes.string.isRequired,
    inputProps: PropTypes.shape({}),
  }).isRequired,
  parentProps: PropTypes.shape({}),
  value: PropTypes.string,
  isChecked: PropTypes.bool,
};

FormElement.defaultProps = {
  customHandleChange: null,
  className: null,
  parentProps: null,
  handleBlur: null,
  value: '',
  isChecked: false,
};
