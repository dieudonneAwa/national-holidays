import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="container-fluid footer">
        <div className="row">
          <p>&copy; 2019 NaHolidays by Awa Dieudonne</p>
        </div>
      </div>
    );
  }
}
export default Footer;
