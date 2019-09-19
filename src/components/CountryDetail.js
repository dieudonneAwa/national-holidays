import React from 'react';
import { connect } from 'react-redux';
import HolidayDetail from './HolidayDetail';
import './CountryDetail.css';

const CountryDetail = ({ country }) => {
  if (!country) return <div>Select a country</div>;
  return (
    <div>
      <div className="countryDetail">
        <h3>Details about {country.name}</h3>
        code: {country.code}<br/>
        Languages: {country.languages.map(lang => `${lang} `)}<br />
        No of Subdivisions: {country.subdivisions.length}
      </div>
      <HolidayDetail countryCode={country.code} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { country: state.selectedCountry };
};

export default connect(mapStateToProps)(CountryDetail);
