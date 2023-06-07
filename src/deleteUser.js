import React, { useState } from 'react';
import './loginPage.css';
import {useNavigate} from "react-router-dom";

const deleteUser = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="form_style">
            <h2>회원탈퇴</h2>
            <form>
                <div>
                    <label className="form-control">비밀번호를 입력하세요: </label>
                    <input type="password"  />
                </div>
                <br />
                <button type="submit">탈퇴</button>
                <button onClick={() => navigate(-1)}>취소</button>
            </form>
        </div>
    );
};

export default deleteUser;