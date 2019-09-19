import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import selectedCountryReducer from './selectedCountryReducer';
import holidayReducer from './holidayReducer';

export default combineReducers({
  countries: countriesReducer,
  selectedCountry: selectedCountryReducer,
  holidays: holidayReducer
});
