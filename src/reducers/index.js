import { combineReducers } from 'redux';

const countriesReducer = () => [
  { code: 'CM', name: 'Cameroon', languages: ['en', 'fr'] },
  { code: 'NG', name: 'Nigeria', languages: ['en'] },
  { code: 'MZ', name: 'Mozambique', languages: ['pt'] },
  { code: 'GH', name: 'Ghana', languages: ['en'] },
  { code: 'ZW', name: 'Zimbabwe', languages: ['en'] }
];

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
