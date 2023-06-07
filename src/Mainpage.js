import React from 'react';
import Weather from './Weather';
import Search from './Search';
import Poplink from './Poplink';
import Category from './Category';
import './App.css';
import {useEffect, useState} from "react";

function Main(props) {
    const [isLogin, setIsLogin] = useState(false); //로그인 관리

    // 로그인이 되어있다면 isLogin 은 true, 아니면 false
    useEffect(() => {
        if (sessionStorage.getItem("name") === null) {
            // sessionStorage 에 name 라는 key 값으로 저장된 값이 없다면
            console.log("isLogin ?? :: ", isLogin);
        } else {
            // sessionStorage 에 name 라는 key 값으로 저장된 값이 있다면
            // 로그인 상태 변경
            setIsLogin(true);
            console.log("isLogin ?? :: ", isLogin);
        }
    });

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