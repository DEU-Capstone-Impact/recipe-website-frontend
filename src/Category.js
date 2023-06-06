import React from 'react';

function Category(props) {
  return(
    <table className="footer-table">
      <tr>
        <td><a href="#">한식</a></td>
        <td><a href="#">중식</a></td>
      </tr>
      <tr>
        <td><a href="#">일식</a></td>
        <td><a href="#">양식</a></td>
      </tr>
    </table>
  );
}

export default Category;