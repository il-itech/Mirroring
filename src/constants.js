export const PROJECT_ENVS = {
  DEV: 'development',
  PROD: 'production',
};

export const IS_MODE_DEV = process.env.NODE_ENV === PROJECT_ENVS.DEV;

export const HTTP_CODES = {
  OK: 200,
  MOVED_PERMANENTLY: 301,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
};

export const ALERT_MESSAGES = {
  [HTTP_CODES.BAD_REQUEST]: 'Bad request',
  [HTTP_CODES.UNAUTHORIZED]: 'Unauthorized',
  [HTTP_CODES.FORBIDDEN]: 'Forbidden',
  [HTTP_CODES.NOT_FOUND]: 'Content not found',
  [HTTP_CODES.INTERNAL_SERVER_ERROR]: 'Internal server error',
  [HTTP_CODES.BAD_GATEWAY]: 'Bad Gateway',
};

export const ERRORS = {
  UNDEFINED: 'UNKNOWN_ERROR',
  AUTH_ERROR: 'AUTH_ERROR',
};

export const FORM_TYPES = {
  SIGN_IN: 'signIn',
  SIGN_UP: 'signUp',
  CHAT_MESSAGE: 'chatMessage',
};

export const FORM_FIELD_TYPES = {
  TEXT: 'text',
  TEXTAREA: 'textarea',
  PASSWORD: 'password',
  EMAIL: 'email',
  SWITCH: 'switch',
  RADIO: 'radio',
  CHECKBOX: 'checkbox',
  SELECT: 'select',
  DATE: 'date',
};

export const FORM_TARGET_VALUES_SERIALIZE = {
  [FORM_FIELD_TYPES.TEXT]: 'value',
  [FORM_FIELD_TYPES.TEXTAREA]: 'value',
  [FORM_FIELD_TYPES.PASSWORD]: 'value',
  [FORM_FIELD_TYPES.EMAIL]: 'value',
  [FORM_FIELD_TYPES.SELECT]: 'value',
  [FORM_FIELD_TYPES.CHECKBOX]: 'checked',
  [FORM_FIELD_TYPES.RADIO]: 'checked',
  [FORM_FIELD_TYPES.SWITCH]: 'checked',
};

export const VALIDATION_TYPES = {
  MAX_LENGTH: 'max_length',
  MIN_LENGTH: 'min_length',
  EMAIL: 'email',
  NUMBER: 'number',
  REQUIRED: 'required',
  PASSWORD_EQUALITY: 'password_equality',
  PASSWORD_CONFIRMATION: 'password_confirmation',
  MIN_VALUE: 'min_value',
};

export const VALIDATION_ERRORS = {
  TOO_SHORT: 'TOO_SHORT',
  TOO_LONG: 'TOO_LONG',
  INVALID_EMAIL: 'INVALID_EMAIL',
  INVALID_PASSWORD: 'INVALID_PASSWORD',
  PASSWORD_CONFIRMATION: 'PASSWORD_CONFIRMATION',
  MISSING_REQUIRED: 'MISSING_REQUIRED',
  TOO_LONG_METRICS: 'TOO_LONG_METRICS',
  UNDEFINED: 'UNDEFINED',
  TOO_SMALL_VALUE: 'TOO_SMALL_VALUE',
};

export const VALIDATION_ERRORS_MESSAGES = {
  [VALIDATION_ERRORS.TOO_SHORT]: 'too-short',
  [VALIDATION_ERRORS.TOO_LONG]: 'too-long',
  [VALIDATION_ERRORS.INVALID_EMAIL]: 'invalid-email',
  [VALIDATION_ERRORS.INVALID_PASSWORD]: 'invalid-password',
  [VALIDATION_ERRORS.PASSWORD_CONFIRMATION]: 'password-confirmation',
  [VALIDATION_ERRORS.MISSING_REQUIRED]: 'missing-required',
  [VALIDATION_ERRORS.TOO_LONG_METRICS]: 'too-long-metrics',
  [VALIDATION_ERRORS.UNDEFINED]: 'unknown',
  [VALIDATION_ERRORS.TOO_SMALL_VALUE]: 'too-small-value',
};

export const REDUCER_TYPES = {
  SYSTEM: 'system',
  MESSENGER: 'messenger',
  CORONAVIRUS: 'coronavirus',
  FORMS: 'forms',
};

export const CORONAVIRUS_REDUCER_TYPES = {
  GLOBAL_STATS: 'globalStats',
  ALL_COUNTRY_STATS: 'allCountryStats',
  COUNTRY_STATS: 'countryStats',
  FULL_TIMELINE_STATS: 'fullTimelineStats',
  COUNTRY_TIMELINE_STATS: 'countryTimelineStats',
};
