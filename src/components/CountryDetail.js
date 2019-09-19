import React from 'react';
import { connect } from 'react-redux';
import HolidayDetail from './HolidayDetail';

const CountryDetail = ({ country }) => {
  if (!country) return <div>Select a country</div>;
  return (
    <div>
      <h3>Details about {country.name}</h3>
      code: {country.code} <br/>
      Languages: {country.languages}
      <HolidayDetail countryCode={country.code} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { country: state.selectedCountry };
};

export default connect(mapStateToProps)(CountryDetail);
