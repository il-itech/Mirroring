/* eslint-disable no-console */
import { UnknownObjectType } from 'interfaces';

export const logInfo = (info: string | UnknownObjectType) => {
  console.info('Info: ', info);
};

export const logError = (error: string | Error | UnknownObjectType, info = {}) => {
  console.info('Error here!: ', error, info);

  return error;
};
