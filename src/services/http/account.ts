import { Observable } from 'rxjs/internal/Observable';
import { AjaxCreationMethod, AjaxResponse } from 'rxjs/internal/observable/dom/AjaxObservable';

import { getConfig } from 'helpers/env';
import { FileData } from 'actions/files';

const api = getConfig('HTTP_API_URL');

/**
 * API for setting user avatar
 * @param {AjaxCreationMethod} ajax
 * @param {Object} body
 */
export const setUserAvatar = (
  ajax: AjaxCreationMethod,
  body: FileData,
  token: string,
): Observable<AjaxResponse> => ajax({
  url: `${api}/user/set-avatar`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body,
});
