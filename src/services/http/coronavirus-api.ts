import { Observable } from 'rxjs/internal/Observable';
import { AjaxCreationMethod, AjaxResponse } from 'rxjs/internal/observable/dom/AjaxObservable';

/**
 * API for receive current globally accumulated coronavirus stats
 * @param {AjaxCreationMethod} ajax
 */
export const getGlobalCoronavirusStats = (ajax: AjaxCreationMethod): Observable<AjaxResponse> => ajax({
  url: 'https://api.thevirustracker.com/free-api?global=stats',
  method: 'GET',
});

/**
 * API for receive all of the current accumulated stats for all countries
 * @param {AjaxCreationMethod} ajax
 */
export const getAllCountryCoronavirusStats = (ajax: AjaxCreationMethod): Observable<AjaxResponse> => ajax({
  url: 'https://api.thevirustracker.com/free-api?countryTotals=ALL',
  method: 'GET',
});

/**
 * API for receive the current accumulated stats for country by code
 * @param {AjaxCreationMethod} ajax
 * @param {String} code
 */
export const getCountryCoronavirusStats = (ajax: AjaxCreationMethod, code: string): Observable<AjaxResponse> => ajax({
  url: `https://api.thevirustracker.com/free-api?countryTotal=${code}`,
  method: 'GET',
});
