export default {
  FORM_TYPE: 'changePassword',
  FIELDS: {
    email: {
      type: 'password',
      label: 'Password',
      validation: [
        { type: 'required' },
        { type: 'min_length', value: 8 },
        { type: 'password_equality' },
      ],
    },
    password: {
      type: 'password',
      label: 'Password confirmation',
      validation: [
        { type: 'required' },
        { type: 'password_confirmation' },
      ],
    },
  },
};
