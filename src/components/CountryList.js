import React from 'react';
import { connect } from 'react-redux';
import { selectCountry } from '../actions/index';

class CountryList extends React.Component {
  renderList() {
    return this.props.countries.map(country => {
      return (
        <div className="container" key={country.name}>
          <div className="row">
            <div className="col-lg-6">{country.name}</div>
            <div className="col-lg-6">
              <buttton className="btn btn-primary" onClick={() => this.props.selectCountry(country)}>
                Select
              </buttton>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { countries: state.countries };
};

export default connect(mapStateToProps, {
  selectCountry
})(CountryList);
