import React from 'react';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';

const App = () => {
	return (
		<div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <CountryList />
        </div>
        <div className="col-lg-6 col-md-6">
          <CountryDetail />
        </div>
      </div>
		</div>
	);
};

export default App;
