import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const recipeView = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [recipe, setRecipe] = useState({
        title: '토마토 스파게티',
        ingredients: '스파게티 면, 토마토 소스, 양파, 마늘, 올리브 오일',
        time: '30분',
        category: '양식',
        content: '토마토 스파게티의 레시피 내용...',
    });

    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // let [userName] = useState('hacker');
    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // let [feedComments, setFeedComments] = useState([]);
    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // let [isValid, setIsValid] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [comments, setComments] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newComment, setNewComment] = useState('');

    const handleInputChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (newComment.trim() !== '') {
            const updatedComments = [...comments, newComment];
            setComments(updatedComments);
            setNewComment('');
        }
    };

    const handleEdit = () => {
        // 수정 버튼 동작 처리
        console.log('수정');
    };

    const handleDelete = () => {
        // 삭제 버튼 동작 처리
        console.log('삭제');
    };

    const handleBackToList = () => {
        // 목록 버튼 동작 처리
        console.log('목록');
    };

    return (
        <div>
            <h2>{recipe.title}</h2>
            <p>재료: {recipe.ingredients}</p>
            <p>소요시간: {recipe.time}</p>
            <p>카테고리: {recipe.category}</p>
            <p>{recipe.content}</p>

            <div>
                <button type="submit" onClick={() => {navigate("/recipeUpdate")}}>수정</button>
                <button type="submit" >삭제</button>
                <button type="submit" onClick={() => navigate(-1)}>목록</button>
            </div>

            <h3>댓글</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
            <form onSubmit={handleCommentSubmit}>
                <input
                    type="text"
                    value={newComment}
                    onChange={handleInputChange}
                    placeholder="댓글을 입력하세요"
                />
                <button type="submit">등록</button>
            </form>

        </div>
    );
};

export default recipeView;