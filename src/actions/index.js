/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line arrow-parens
// eslint-disable-next-line arrow-body-style
import 'babel-polyfill';
import holidayApi from '../apis/holidayApi';

export const fetchCountries = () => async dispatch => {
  try {
    const { data } = await holidayApi.get('/countries?key=b3fb9767-3294-46ed-badd-f8bd4da4bb46');
    return dispatch({ type: 'FETCH_COUNTRIES', payload: data.countries });
  } catch (error) {
    throw new Error(error);
  }
};

export const selectCountry = country => {
  return {
    type: 'COUNTRY_SELECTED',
    payload: country
  };
};

export const fetchHoliday = (countryCode) => async dispatch => {
  try {
    const { data } = await holidayApi.get(`/holidays?key=b3fb9767-3294-46ed-badd-f8bd4da4bb46&country=${countryCode}&year=2018`);
    return dispatch({ type: 'FETCH_HOLIDAY', payload: data.holidays });
  } catch (error) {
    throw new Error(error);
  }
};
