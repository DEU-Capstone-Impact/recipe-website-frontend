import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipes from './Rpkorea';

function Recipe_Choice() {
  // URL 매개변수로부터 인덱스 값을 가져옵니다.
  const { index } = useParams();

  // 레시피 배열에서 선택된 레시피를 가져옵니다.
  const selectedRecipe = recipes[index];

  return (
    <div>
      <h2>{selectedRecipe.name}</h2>
      <p>재료: {selectedRecipe.ingredients}</p>
      <p>소요시간: {selectedRecipe.time}</p>
      <p>레시피 내용:</p>
      <p>{selectedRecipe.description}</p>

      {/* 페이지 이동을 위한 링크 */}
      <Link to="/recipe-ranking">목록</Link>
      <Link to="/recipe-registration">등록</Link>
      {/* 댓글 섹션 */}
      <div>
        <h3>댓글</h3>
        {/* 댓글 목록을 보여주는 로직 */}
      </div>
    </div>
  );
}

export default Recipe_Choice;
