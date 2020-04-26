export default {
  FORM_TYPE: 'signIn',
  FIELDS: {
    email: {
      type: 'text',
      label: 'Email Adress',
      validation: [
        { type: 'required' },
        { type: 'email' },
      ],
    },
    password: {
      type: 'password',
      label: 'Password',
      validation: [
        { type: 'required' },
        { type: 'min_length', value: 8 },
        { type: 'password_equality' },
      ],
    },
  },
};
