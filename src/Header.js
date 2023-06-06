import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const [showCategory, setShowCategory] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowCategory(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowCategory(false);
    }, 200);
  };

  const handleMenuClick = () => {
    setShowCategory(!showCategory);
  };

  return (
    <header>
      <div className="logo">
        <Link className='topmenu' to='/'><h3>세상에 나쁜 요리는 없다</h3></Link>
        <ul className="nav-links">
          <Link className='topmenu' to="/recipe-ranking">인기순위</Link>

          <li
            className={`topmenu ${showCategory ? 'active' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleMenuClick}
          >
            레시피
            {showCategory && (
              <ul className="category-menu">
                <li><Link to="/Rpkorea">한식</Link></li>
                <li><Link to="/Rpchina">중식</Link></li>
                <li><Link to="/Rpjapan">일식</Link></li>
                <li><Link to="/Rpwestern">양식</Link></li>
              </ul>
            )}
          </li>
          <Link className='topmenu' to="#">검색</Link>
          <Link className='topmenu' to="#">로그인</Link>
          <Link className='topmenu' to="#">회원가입</Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
