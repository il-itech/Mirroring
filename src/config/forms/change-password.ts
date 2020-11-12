export default {
  FORM_TYPE: 'changePassword',
  FIELDS: {
    password: {
      type: 'password',
      label: 'Password',
      validation: [
        { type: 'required' },
        { type: 'min_length', value: 8 },
        { type: 'password_equality' },
      ],
    },
    passwordConfirmation: {
      type: 'password',
      label: 'Password confirmation',
      validation: [
        { type: 'required' },
        { type: 'password_confirmation' },
      ],
    },
  },
};
