import React, { useState } from 'react';

const registerPage = () => {

    return (
        <div style={{backgroundPosition : 'center'}}>
            <h2>회원가입</h2>
            <form >
                <div>
                    <label htmlFor="username">이름</label>
                    <input
                        type="text"
                        id="username"
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
                <button type="submit">취소</button>
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
};

export default registerPage;