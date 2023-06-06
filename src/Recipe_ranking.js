import React from 'react';
import { Link } from 'react-router-dom';
import './Recipe_ranking.css';

function Ranking_recipe() {
  // 레시피 배열
  const recipes = [
    {
    img: 'china.jpg',
    name: '양념치킨',
    ingredients: '치킨, 간장, 고추장, 설탕, 매운고추',
    time: '1시간 30분',
    },
    {
    img: 'japan.jpg',
    name: '초밥',
    ingredients: '초밥용 해산물, 밥, 식초, 설탕, 소금, 야채, 와사비, 간장',
    time: '1시간',
    },
    {
    img: 'korea.jpg',
    name: '김치찌개',
    ingredients: '김치, 돼지고기, 두부, 양파, 대파, 청양고추, 물',
    time: '40분',
    },
    {
    img: 'west.jpg',
    name: '짬뽕',
    ingredients: '새우, 오징어, 돼지고기, 양파, 미나리, 대파, 청양고추, 짜장분말, 물',
    time: '50분',
    },
    {
    img: 'china.jpg',
    name: '스테이크',
    ingredients: '등심, 소금, 후추, 기름, 마늘, 로즈마리',
    time: '20분',
    },
    {
    img: 'japan.jpg',
    name: '팟타이',
    ingredients: '물, 설탕, 라면, 새우, 두부, 파, 밥숟가락 간장, 레몬, 불고기소스',
    time: '30분',
    },
    {
    img: 'korea.jpg',
    name: '순두부찌개',
    ingredients: '순두부, 간장, 청양고추, 미나리, 대파, 양파, 다진마늘, 물',
    time: '30분',
    },
    {
    img: 'west.jpg',
    name: '순두부찌개',
    ingredients: '순두부, 간장, 청양고추, 미나리, 대파, 양파, 다진마늘, 물',
    time: '30분',
    },
    {
    img: 'china.jpg',
    name: '양념치킨',
    ingredients: '치킨, 간장, 고추장, 설탕, 매운고추',
    time: '1시간 30분',
    },
    {
    img: 'china.jpg',
    name: '양념치킨',
    ingredients: '치킨, 간장, 고추장, 설탕, 매운고추',
    time: '1시간 30분',
    },
    {
    img: 'japan.jpg',
    name: '초밥',
    ingredients: '초밥용 해산물, 밥, 식초, 설탕, 소금, 야채, 와사비, 간장',
    time: '1시간',
    },
    {
    img: 'korea.jpg',
    name: '김치찌개',
    ingredients: '김치, 돼지고기, 두부, 양파, 대파, 청양고추, 물',
    time: '40분',
    },
    {
    img: 'west.jpg',
    name: '짬뽕',
    ingredients: '새우, 오징어, 돼지고기, 양파, 미나리, 대파, 청양고추, 짜장분말, 물',
    time: '50분',
    },
    {
    img: 'china.jpg',
    name: '스테이크',
    ingredients: '등심, 소금, 후추, 기름, 마늘, 로즈마리',
    time: '20분',
    },
    {
    img: 'japan.jpg',
    name: '팟타이',
    ingredients: '물, 설탕, 라면, 새우, 두부, 파, 밥숟가락 간장, 레몬, 불고기소스',
    time: '30분',
    },
    {
    img: 'korea.jpg',
    name: '순두부찌개',
    ingredients: '순두부, 간장, 청양고추, 미나리, 대파, 양파, 다진마늘, 물',
    time: '30분',
    }
    // 레시피를 더 추가할 수 있습니다.
];

  // 3x5 그리드로 레시피 배열 표시
  const recipeCells = [];
  for (let i = 0; i < 3; i++) {
    const column = [];
    for (let j = 0; j < 5; j++) {
      const index = j * 3 + i;
      if (index >= recipes.length) break;
      const recipe = recipes[index];
      const cellClasses = ['recipe-cell'];
      
      // 1등, 2등, 3등에 해당하는 요소에 클래스 추가
      if (index === 0) {
        cellClasses.push('recipe-cell-first');
      } else if (index === 1) {
        cellClasses.push('recipe-cell-second');
      } else if (index === 2) {
        cellClasses.push('recipe-cell-third');
      }

      const cell = (
        <div className={cellClasses.join(' ')} key={index}>
          <img src={recipe.img} alt={recipe.name} />
          <div className="recipe-name">{recipe.name}</div>
        </div>
      );

      column.push(cell);
    }
    recipeCells.push(
      <div className="recipe-column" key={i}>
        {column}
      </div>
    );
  }

  return (
    <div>
      <div className="recipe-grid">{recipeCells}</div>
    </div>
  );
}

export default Ranking_recipe;