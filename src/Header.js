import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const [showCategory, setShowCategory] = useState(false);
  const [searchValue, setSearchValue] = useState(''); // 검색어 상태값 추가
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

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // 검색어를 이용한 검색 기능 구현 또는 검색 결과 페이지로 이동하는 로직 추가
    console.log('검색어:', searchValue);
    setSearchValue('');
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

          <Link className='topmenu' to="#">레시피업로드</Link>
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              className="search-input"
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchValue}
              onChange={handleSearchInputChange}
            />
            <button className="search-button" type="submit">검색</button>
          </form>
          <Link className='topmenu my-page' to="#">마이페이지</Link>
          <Link className='topmenu' to="#">로그아웃</Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
