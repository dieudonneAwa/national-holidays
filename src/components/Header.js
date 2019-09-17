import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Link to="/" className="logo">NH</Link>
          <Link to="/" className="brand">NaHolidays</Link>
          <Link to="/" className="countries">Countries</Link>
        </div>
      </div>
    );
  }
}
export default Header;
