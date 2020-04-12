/**
 * API for receive current globally accumulated coronavirus stats
 * @param {Object} ajax
 */
export const getGlobalCoronavirusStats = ajax => ajax({
  url: 'https://api.thevirustracker.com/free-api?global=stats',
  method: 'GET',
});

/**
 * API for receive all of the current accumulated stats for all countries
 * @param {Object} ajax
 */
export const getAllCountryCoronavirusStats = ajax => ajax({
  url: 'https://api.thevirustracker.com/free-api?countryTotals=ALL',
  method: 'GET',
});

/**
 * API for receive the current accumulated stats for country by code
 * @param {Object} ajax
 * @param {String} code
 */
export const getCountryCoronavirusStats = (ajax, code) => ajax({
  url: `https://api.thevirustracker.com/free-api?countryTotal=${code}`,
  method: 'GET',
});
