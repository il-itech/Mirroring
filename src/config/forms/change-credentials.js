export default {
  FORM_TYPE: 'changeCredentials',
  FIELDS: {
    firstname: {
      type: 'text',
      label: 'First Name',
      validation: [
        { type: 'required' },
        { type: 'min_length', value: 2 },
        { type: 'max_length', value: 50 },
      ],
    },
    lastname: {
      type: 'text',
      label: 'Last Name',
      validation: [
        { type: 'required' },
        { type: 'min_length', value: 2 },
        { type: 'max_length', value: 50 },
      ],
    },
    email: {
      type: 'text',
      label: 'Email Adress',
      validation: [
        { type: 'required' },
        { type: 'email' },
      ],
    },
    country: {
      type: 'text',
      label: 'Country',
      validation: [
        { type: 'required' },
      ],
    },
  },
};
