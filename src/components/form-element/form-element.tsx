import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import { setFormData, setFormError, clearFormError } from 'actions/forms/common';
import { checkErrors } from 'helpers/form';
import { isEmptyOrNil } from 'helpers/utils';
import { FORM_FIELD_TYPES, FORM_TARGET_VALUES_SERIALIZE } from 'enums';
import elements from './elements';

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
  variant,
  customHandleChange,
  customHandleBlur,
  value,
  isChecked,
}) => {
  const { type: elementType, validation } = elementProps;
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

  const handleBlur = useCallback(
    () => {
      const error = checkErrors({ [field]: { validation } }, { [field]: value });

      if (isEmptyOrNil(error)) {
        R.compose(dispatch, clearFormError)(formType, field);
      } else {
        R.compose(dispatch, setFormError)(formType, error);
      }
    },
    [dispatch, field, formType, validation, value],
  );

  return (
    <Element
      formType={formType}
      className={className}
      field={field}
      variant={variant}
      handleChange={customHandleChange || handleChange}
      handleBlur={customHandleBlur || handleBlur}
      value={value}
      checked={isChecked}
      {...elementProps}
      {...parentProps}
    />
  );
};

FormElement.propTypes = {
  formType: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  customHandleChange: PropTypes.func,
  customHandleBlur: PropTypes.func,
  handleBlur: PropTypes.func,
  className: PropTypes.string,
  elementProps: PropTypes.shape({
    type: PropTypes.string.isRequired,
    inputProps: PropTypes.shape({}),
    validation: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  parentProps: PropTypes.shape({}),
  variant: PropTypes.string,
  value: PropTypes.string,
  isChecked: PropTypes.bool,
};

FormElement.defaultProps = {
  customHandleChange: null,
  customHandleBlur: null,
  className: null,
  parentProps: null,
  variant: 'standard',
  handleBlur: null,
  value: '',
  isChecked: false,
};
