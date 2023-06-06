import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
      <header>
        <div className="logo">
          <Link className='topmenu' to='/'><h3>세상에 나쁜 요리는 없다</h3></Link>
          <ul className="nav-links">
            <Link className='topmenu' to="/recipe-ranking">인기순위</Link>
            <Link className='topmenu' to="#">레시피</Link>
            <Link className='topmenu' to="#">검색</Link>
            <Link className='topmenu' to="#">로그인</Link>
            <Link className='topmenu' to="#">회원가입</Link>
          </ul>
        </div>
      </header>
    );
  }

export default Header;