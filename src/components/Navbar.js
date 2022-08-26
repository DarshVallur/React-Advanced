import React from 'react';
import { Link } from 'react-router-dom';

function Nabbar(props) {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="about"> About </Link>
    </nav>
  );
}

export default Nabbar;
