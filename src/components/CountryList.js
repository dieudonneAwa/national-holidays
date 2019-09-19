import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectCountry, fetchCountries } from '../actions/index';
import './CountryList.css';

class CountryList extends React.Component {
  componentDidMount() {
    this.props.fetchCountries();
  }
  
  renderList() {
    return this.props.countries.map(country => (
      <NavLink className="row country" to="/country" onClick={() => this.props.selectCountry(country)} key={country.name}>
        <div className="col-lg-11">{country.name}</div>
      </NavLink>
    ));
  }

  render() {
    // console.log(this.props);
    return (<div className="container">{this.renderList()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.countries);
  return { countries: state.countries };
};

export default connect(mapStateToProps, {
  selectCountry, fetchCountries
})(CountryList);
