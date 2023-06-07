import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const recipeUpload = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [title, setTitle] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [content, setContent] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ingredients, setIngredients] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [time, setTime] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [category, setCategory] = useState('');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 레시피 등록 처리
        console.log('레시피 등록:', title, content);
        // 필요한 로직을 추가하여 레시피 등록을 처리할 수 있습니다.

        // 입력 필드 초기화
        setTitle('');
        setIngredients('');
        setTime('');
        setCategory('');
        setContent('');
    };

    const handleCancel = () => {
        // 입력 필드 초기화
        setTitle('');
        setIngredients('');
        setTime('');
        setCategory('');
        setContent('');
};

    return (
        <div>
            <h2>레시피 등록</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">제목 </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="ingredients">재료 </label>
                    <input
                        type="text"
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="time">소요시간 </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>카테고리</label>
                        <label>
                            <input
                                type="radio"
                                value="korean"
                                checked={category === 'korean'}
                                onChange={() => setCategory('korean')}
                            />
                            한식
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="chinese"
                                checked={category === 'chinese'}
                                onChange={() => setCategory('chinese')}
                            />
                            중식
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="japanese"
                                checked={category === 'japanese'}
                                onChange={() => setCategory('japanese')}
                            />
                            일식
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="western"
                                checked={category === 'western'}
                                onChange={() => setCategory('western')}
                            />
                            양식
                        </label>
                    </div>
                <div>
                    <p>이미지 업로드</p>
                    <input type="file" accept="image/*" onChange={handleFileSelect} />
                </div>
                <div>
                    <p htmlFor="content">내용 </p>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <div className="buttons">
                    <button type="submit">등록</button>
                    <button onClick={() => navigate(-1)}>취소</button>
                </div>
            </form>
        </div>
    );
};

export default recipeUpload;