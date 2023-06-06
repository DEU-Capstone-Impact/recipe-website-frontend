import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import RecipeRanking from './Recipe_ranking';
import Weather from './Weather';
import Search from './Search';
import Poplink from './Poplink';
import Category from './Category';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-ranking" element={<RecipeRanking/>} />
        </Routes>
        <Weather />
        <Search />
        <footer>
          <Poplink />
          <Category />
        </footer>
      </div>
    </Router>
  );
}

function Home() {
}

export default App;
