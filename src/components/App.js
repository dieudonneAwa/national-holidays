import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';
import Header from './Header';
import './App.css';
import Footer from './Footer';

const App = () => {
  return (
      <Router>
    <div>
      <Header/>
        <div className="container">
          <Route exact path="/" component={CountryList} />
          <Route path="/country" component={CountryDetail} />
        </div>
        <Footer />
    </div>
      </Router>
  );
};

export default App;
