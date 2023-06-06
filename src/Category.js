import React from 'react';
import { Link } from 'react-router-dom';

function Category(props) {
  return(
    <table className="footer-table">
      <tr>
        <Link to="/Rpkorea"><img src="korea.jpg" alt="Korea" /></Link>
        <Link to="/Rpchina"><img src="china.jpg" alt="China" /></Link>
      </tr>
      <tr>
        <Link to="/Rpjapan"><img src="japan.jpg" alt="Japan" /></Link>
        <Link to="/Rpwestern"><img src="west.jpg" alt="West" /></Link>
      </tr>
    </table>
  );
}

export default Category;