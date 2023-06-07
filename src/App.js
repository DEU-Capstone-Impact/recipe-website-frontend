import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './Header';
import Home from './Mainpage';
import RecipeRanking from './Recipe_ranking';
import RecipeKorea from './Rpkorea';
import RecipeChina from './Rpchina';
import RecipeJapan from './Rpjapan';
import RecipeWestern from './Rpwestern';
import RecipeChoice from './Recipe_choice';
import NotFound from './NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-ranking" element={<RecipeRanking />} />
          <Route path="/Rpkorea" element={<RecipeKorea />} />
          <Route path="/Rpchina" element={<RecipeChina />} />
          <Route path="/Rpjapan" element={<RecipeJapan />} />
          <Route path="/Rpwestern" element={<RecipeWestern />} />
          <Route path="/Rpwestern" element={<RecipeWestern />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
