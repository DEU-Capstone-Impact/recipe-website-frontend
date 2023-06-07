import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const mypage = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();

    return (
        <div>
            <h2>마이페이지</h2>
            <form>
                <div>
                    <label>이름 </label>
                    <input type="email" />
                </div>
                <div>
                    <label>아이디 </label>
                    <input type="email" />
                </div>
                <div>
                    <label>비밀번호 </label>
                    <input type="password"  />
                </div>
                <div>
                    <label>이메일 </label>
                    <input type="email"  />
                </div>
                <div>
                    <label>내가 올린 레시피 </label>
                    <input type="recipe"  />
                </div>
                <br />
                <button type="submit" onClick={() => {navigate("/mypageUpdate")}}>수정</button>
                <button type="submit" onClick={() => {navigate("/deleteUser")}}>탈퇴</button>
            </form>
        </div>
    );
};

export default mypage;