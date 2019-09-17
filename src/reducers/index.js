import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';

const selectedCountryReducer = (selectedCountry = null, action) => {
  if (action.type === 'COUNTRY_SELECTED') {
    
    return action.payload;
  }
  return selectedCountry;
};

export default combineReducers({
  countries: countriesReducer,
  selectedCountry: selectedCountryReducer
});
