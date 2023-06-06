import React from 'react';

function Search(props) {
  return(
    <div className="searchArea">
      <input type="search" name="search" placeholder="검색하고 싶은 재료를 입력하세요" required />
      <button type="submit" className="btn_search">검색</button>
    </div>
  );
}

export default Search;