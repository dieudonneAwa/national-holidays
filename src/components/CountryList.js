import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectCountry } from '../actions/index';
import './CountryList.css';

class CountryList extends React.Component {
  renderList() {
    return this.props.countries.map(country => (
      <NavLink className="row" to="/country" onClick={() => this.props.selectCountry(country)} key={country.name}>
        <div className="col-lg-11">{country.name}</div>
      </NavLink>
    ));
  }

  render() {
    return (<div className="">
      {this.renderList()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { countries: state.countries };
};

export default connect(mapStateToProps, {
  selectCountry
})(CountryList);
