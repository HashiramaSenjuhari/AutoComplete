import React from 'react';
import Search from './Search.jsx';
import data from './resources/countryData.json';
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Country Search</h1>
      <Search data={data} />
    </div>
  );
};

export default App;
