/* eslint-disable no-console */

export const logInfo = (info) => {
  console.info('Info: ', info);
};

export const logError = (error, info = {}) => {
  console.info('Error here!: ', error, info);

  return error;
};
