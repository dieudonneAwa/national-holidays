import React from 'react';
import { connect } from 'react-redux';

const CountryDetail = ({ country }) => {
  if (!country) return <div>Select a country</div>;
  return (
    <div>
      <h3>Details for: {country.name}</h3>
      code: {country.code} <br/>
      Languages: {country.languages}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { country: state.selectedCountry };
};

export default connect(mapStateToProps)(CountryDetail);
