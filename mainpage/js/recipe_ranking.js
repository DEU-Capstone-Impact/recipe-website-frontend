// 레시피 배열
const recipes = [
    {
      img: 'testimage/china.jpg',
      name: '양념치킨',
      ingredients: '치킨, 간장, 고추장, 설탕, 매운고추',
      time: '1시간 30분',
    },
    {
      img: 'testimage/japan.jpg',
      name: '초밥',
      ingredients: '초밥용 해산물, 밥, 식초, 설탕, 소금, 야채, 와사비, 간장',
      time: '1시간',
    },
    {
      img: 'testimage/korea.jpg',
      name: '김치찌개',
      ingredients: '김치, 돼지고기, 두부, 양파, 대파, 청양고추, 물',
      time: '40분',
    },
    {
      img: 'testimage/west.jpg',
      name: '짬뽕',
      ingredients: '새우, 오징어, 돼지고기, 양파, 미나리, 대파, 청양고추, 짜장분말, 물',
      time: '50분',
    },
    {
      img: 'testimage/china.jpg',
      name: '스테이크',
      ingredients: '등심, 소금, 후추, 기름, 마늘, 로즈마리',
      time: '20분',
    },
    {
      img: 'testimage/japan.jpg',
      name: '팟타이',
      ingredients: '물, 설탕, 라면, 새우, 두부, 파, 밥숟가락 간장, 레몬, 불고기소스',
      time: '30분',
    },
    {
      img: 'testimage/korea.jpg',
      name: '순두부찌개',
      ingredients: '순두부, 간장, 청양고추, 미나리, 대파, 양파, 다진마늘, 물',
      time: '30분',
    },
    {
      img: 'testimage/west.jpg',
      name: '순두부찌개',
      ingredients: '순두부, 간장, 청양고추, 미나리, 대파, 양파, 다진마늘, 물',
      time: '30분',
    },
    {
      img: 'testimage/china.jpg',
      name: '양념치킨',
      ingredients: '치킨, 간장, 고추장, 설탕, 매운고추',
      time: '1시간 30분',
    },
    {
      img: 'testimage/china.jpg',
      name: '양념치킨',
      ingredients: '치킨, 간장, 고추장, 설탕, 매운고추',
      time: '1시간 30분',
    },
    {
      img: 'testimage/japan.jpg',
      name: '초밥',
      ingredients: '초밥용 해산물, 밥, 식초, 설탕, 소금, 야채, 와사비, 간장',
      time: '1시간',
    },
    {
      img: 'testimage/korea.jpg',
      name: '김치찌개',
      ingredients: '김치, 돼지고기, 두부, 양파, 대파, 청양고추, 물',
      time: '40분',
    },
    {
      img: 'testimage/west.jpg',
      name: '짬뽕',
      ingredients: '새우, 오징어, 돼지고기, 양파, 미나리, 대파, 청양고추, 짜장분말, 물',
      time: '50분',
    },
    {
      img: 'testimage/china.jpg',
      name: '스테이크',
      ingredients: '등심, 소금, 후추, 기름, 마늘, 로즈마리',
      time: '20분',
    },
    {
      img: 'testimage/japan.jpg',
      name: '팟타이',
      ingredients: '물, 설탕, 라면, 새우, 두부, 파, 밥숟가락 간장, 레몬, 불고기소스',
      time: '30분',
    },
    {
      img: 'testimage/korea.jpg',
      name: '순두부찌개',
      ingredients: '순두부, 간장, 청양고추, 미나리, 대파, 양파, 다진마늘, 물',
      time: '30분',
    }
    // 레시피를 더 추가할 수 있습니다.
  ];

// 3x5 그리드로 레시피 배열 표시
for (let i = 0; i < 3; i++) {
    const column = document.createElement('div');
    column.classList.add('recipe-column');
    for (let j = 0; j < 5; j++) {
        const index = j * 3 + i;
        if (index >= recipes.length) break;
        const cell = document.createElement('div');
        cell.classList.add('recipe-cell');
        const recipe = recipes[index];
        const testimage = document.createElement('img');
        testimage.src = recipe.img;
        testimage.alt = recipe.name;
        cell.appendChild(testimage);
        const name = document.createElement('div');
        name.textContent = recipe.name;
        name.classList.add('recipe-name');
        cell.appendChild(name);

        // 1등, 2등, 3등에 해당하는 요소에 클래스 추가
        if (index === 0) {
        cell.classList.add('recipe-cell-first');
        } else if (index === 1) {
        cell.classList.add('recipe-cell-second');
        } else if (index === 2) {
        cell.classList.add('recipe-cell-third');
        }
        column.appendChild(cell);
    
    }
    document.querySelector('.recipe-grid').appendChild(column);
    }