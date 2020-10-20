export default {
  FORM_TYPE: 'resetPassword',
  FIELDS: {
    email: {
      type: 'text',
      label: 'Email Adress',
      validation: [
        { type: 'required' },
        { type: 'email' },
      ],
    },
  },
};
