import React from 'react';
import Weather from './Weather';
import Search from './Search';
import Poplink from './Poplink';
import Category from './Category';
import './App.css';

function Main(props) {
  return (
    <div>
        <Weather />
        <Search />
        <footer>
          <Poplink />
          <Category />
        </footer>
      </div>
  );
}

export default Main;