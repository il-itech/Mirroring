import * as R from 'ramda';

import CONFIG from '../config/config';

/**
 * Get a obj from config by key
 * @param {String} key
 * @example getConfig('FORMS.SIGN_UP.FIELDS')
 * @returns {Object | String | null | underfined}
 */
export const getConfig = <T>(key: string): T | null | undefined => key
  ? R.path([...key.split('.')], CONFIG)
  : null;
