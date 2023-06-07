import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const registerPage = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState("");
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const handleInputId = (e) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };



    return (
        <div style={{backgroundPosition : 'center'}}>
            <h2>회원가입</h2>
            <form >
                <div>
                    <label htmlFor="username">이름</label>
                    <input
                        type="text"
                        id="username"
                        value={name}
                        placeholder="Enter name"
                    />
                </div>
                <div>
                    <label htmlFor="email">아이디</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter ID"
                    />
                </div>
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                    />
                </div>
                <div>
                    <label htmlFor="password">비밀번호 재입력</label>
                    <input
                        type="password"
                        id="re-password"
                        placeholder="Enter re-password"
                    />
                </div>
                <div>
                    <label htmlFor="password">이메일</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                    />
                </div>
                <button onClick={goBack}>취소</button>
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
};

export default registerPage;