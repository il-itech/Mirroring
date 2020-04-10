
export const logError = (error, info = {}) => {
  // eslint-disable-next-line no-console
  console.info('Error here!: ', error, info);

  return error;
};
