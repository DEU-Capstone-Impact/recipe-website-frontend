import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './Header';
import Home from './Mainpage';
import RecipeRanking from './Recipe_ranking';
import RecipeKorea from './Rpkorea';
import RecipeChina from './Rpchina';
import RecipeJapan from './Rpjapan';
import RecipeWestern from './Rpwestern';
import NotFound from './NotFound';
import './App.css';
import DeleteUser from "./deleteUser";
import LoginPage from "./loginPage";
import Mypage from "./mypage";
import MypageUpdate from "./mypageUpdate";
import RecipeUpdate from "./recipeUpdate";
import RecipeUpload from "./recipeUpload";
import RecipeView from "./recipeView";
import RegisterPage from "./registerPage";

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
          <Route path="/deleteUser" element={<DeleteUser />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypageUpdate" element={<MypageUpdate />} />
          <Route path="/recipeUpdate" element={<RecipeUpdate />} />
          <Route path="/recipeUpload" element={<RecipeUpload />} />
          <Route path="/recipeView" element={<RecipeView />} />
          <Route path="/registerPage" element={<RegisterPage />} />
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
