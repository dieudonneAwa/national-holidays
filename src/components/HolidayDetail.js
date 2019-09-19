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
        <div className="holidayDetail">
          <h5>
              <span>{holiday.name}</span> <br/>
              <small>Date: {holiday.date}</small> <br/>
              <small>Day: {holiday.weekday.date.name}</small><br/>
              <small>
                { holiday.public === true ? 'Public holiday' : 'Private holiday' }
              </small>
          </h5>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="countryDetail">
        <h3>Public Holidays</h3>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { holidays: state.holidays };
};
export default connect(mapStateToProps, { fetchHoliday })(HolidayDetail);
