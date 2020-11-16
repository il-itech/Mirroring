import * as R from 'ramda';

import elements from 'components/form-element/elements';
import { FORM_FIELD_TYPES } from 'enums';

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

export const getElement = R.cond([
  [R.equals(RADIO), R.always(CustomRadio)],
  [R.equals(SELECT), R.always(CustomSelect)],
  [R.equals(SWITCH), R.always(CustomSwitch)],
  [R.equals(CHECKBOX), R.always(CustomCheckbox)],
  [(type: FORM_FIELD_TYPES) => [TEXT, PASSWORD, TEXTAREA].includes(type), R.always(CustomTextField)],
  [R.T, R.always(null)],
]);
