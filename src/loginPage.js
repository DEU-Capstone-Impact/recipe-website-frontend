import React, { useState } from 'react';
import './loginPage.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const loginPage = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const goToSignup = () =>{
        navigate('/registerPage');
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputId, setInputId] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputPw, setInputPw] = useState("");

    const handleInputId = (e) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log("click login");
        console.log("ID : ", inputId);
        console.log("PW : ", inputPw);
        // 서버주소 입력
        const API = "<http://localhost:5000/loginPage>";
        axios(API, {
            email: inputId,
            passwd: inputPw,
        })
            .then((res) => {
                console.log(res);
                console.log("res.data.userId :: ", res.data.userId);
                console.log("res.data.msg :: ", res.data.msg);
                if (res.data.email === undefined) {
                    // id 일치하지 않는 경우 userId = undefined
                    console.log("======================", res.data.msg);
                    alert("입력하신 id가 일치하지 않습니다.");
                } else if (res.data.email === null) {
                    // id는 있지만, pw 는 다른 경우 userId = null
                    console.log(
                        "======================",
                        "입력하신 비밀번호가 일치하지 않습니다."
                    );
                    alert("입력하신 비밀번호가 일치하지 않습니다.");
                } else if (res.data.email === inputId) {
                    // id, pw 모두 일치 userId = userId1, 로그인 성공 시 sessionStorage에 Item으로 닉네임(name) 입력
                    console.log("======================", "로그인 성공");
                    sessionStorage.setItem("user_id", inputId); // sessionStorage에 id를 user_id라는 key 값으로 저장
                    sessionStorage.setItem("name", res.data.name); // sessionStorage에 id를 user_id라는 key 값으로 저장
                }
                // 작업완료시 메인화면 이동
                document.location.href = "/";
            })
            .catch();
    }


    return (

        <div className="form_style">
            <h2 style={{textAlign:"center"}}>로그인</h2>
            <form>
                <div>
                    <label htmlFor='input_id'>ID </label>
                    <input type="id"
                           className="input_id"
                           placeholder="아이디"
                           value={inputId}
                           onChange={handleInputId}
                    />
                </div>
                <div>
                    <label htmlFor='input_pw'>PW </label>
                    <input type="password"
                           className="input_pw"
                           placeholder="비밀번호"
                           value={inputPw}
                           onChange={handleInputPw}
                    />
                </div>
                <br />
                <button type="button" onClick={onClickLogin}>로그인</button>
                <button className="Button" type="submit" onClick={goToSignup}>회원가입</button>
            </form>
        </div>
    );
};

export default loginPage;