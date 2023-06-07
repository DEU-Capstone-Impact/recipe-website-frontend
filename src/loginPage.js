import React, { useState } from 'react';
import './loginPage.css';
import { useNavigate } from "react-router-dom";

const loginPage = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState('');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [button, setButton] = useState(true);
    
    // 아이디에 '@'가 포함되어 있고, 비밀번호가 5자리 이상일 때 로그인버튼이 활성화
    function changeButton() {
        email.includes('@') && password.length >= 5 ? setButton(false) :setButton(true);
    }

    // 로그인 성공 시 메인화면 이동
    const goToMain = () => {
        navigate('/');
    };

    // 로그인을 위한 변수 선언
    let realId = "jsy@naver.com";
    let realPw = "20203115";

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // 로그인 처리 로직 구현
        console.log('Email:', email);
        console.log('Password:', password);
        // 여기서 실제 로그인 처리
    };

    return (

        <div className="form_style">
            <h2 style={{textAlign:"center"}}>로그인</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>ID </label>
                    <input type="email"
                           className="form-control"
                           placeholder="Enter ID"
                           name="email"
                           value={email}
                           onKeyUp={changeButton}
                           onChange={e => {
                               setEmail(e.target.value);
                           }}
                    />
                </div>
                <div>
                    <label>PW </label>
                    <input type="password"
                           className="form-control"
                           placeholder="Enter a password of at least 5 characters"
                           name="pw"
                           value={password}
                           onKeyUp={changeButton}
                           onChange={e => {
                               setPassword(e.target.value);
                           }}
                    />
                </div>
                <br />
                <button type="botton" className="Button" disabled={button} style={{ display: 'flex', justifyContent: 'center' }}
                        onClick={e => {
                            if (realId == email) {
                                if (realPw == password) {
                                    e.stopPropagation();
                                    goToMain();
                                    alert('반갑습니다!');
                                }
                            } else {
                                alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
                            }
                        }}>로그인</button>
                <button className="Button" type="submit" onClick={() => {navigate("/registerPage")}} style={{ display: 'flex', justifyContent: 'center' }}>회원가입</button>
            </form>
        </div>
    );
};

export default loginPage;