import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const mypageUpdate = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h2>마이페이지 수정</h2>
            <form>
                <div>
                    <label>이름 </label>
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
                <br />
                <button type="submit">수정</button>
                <button onClick={() => navigate(-1)}>취소</button>
            </form>
        </div>
    );
};

export default mypageUpdate;