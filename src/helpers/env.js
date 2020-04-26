import * as R from 'ramda';

import CONFIG from '../config/config';

/**
 * Get a obj from config by key
 * @param {String} key
 * @example getConfig('FORMS.SIGN_UP.FIELDS')
 * @returns {Object | String}
 */
export const getConfig = key => key
  ? R.path([...key.split('.')], CONFIG)
  : null;
