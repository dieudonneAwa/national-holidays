import React from 'react';
import { connect } from 'react-redux';
import { fetchHoliday } from '../actions/index';

class HolidayDetail extends React.Component {
  componentDidMount() {
    this.props.fetchHoliday(this.props.countryCode);
  }

  renderList() {
    console.log('This is holiday', this.props.holidays[0]);
    if (!this.props.holidays[0]) {
      return null;
    }
    return this.props.holidays[0].map(holiday => {
      return (
        <div>
          <ul>
          <h5>
            <li>
              {holiday.name}
              <ul>
              <small><li>Date: {holiday.date}</li></small>
              <small><li>Day: {holiday.weekday.date.name}</li></small>
              <small><li>{}</li></small>
              </ul>
            </li>
          </h5>
          </ul>
        </div>
      )
    })
  }

  render() {
    // console.log(this.props.holidays);
    return (
      <div>
        <h3>Holiday Detail</h3>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { holidays: state.holidays };
};
export default connect(mapStateToProps, { fetchHoliday })(HolidayDetail);
