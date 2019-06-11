import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to='./mac'>Mac</Link>
        </div>
        <div>
          <Link to='./ipad'>iPad</Link>
        </div>
        <div>
          <Link to='./iphone'>iphone</Link>
        </div>
        <div>
          <Link to='./watch'>Watch</Link>
        </div>
        <div>
          <Link to='./tv'>TV</Link>
        </div>
        <div>
          <Link to='./music'>Music</Link>
        </div>
        <div>
          <Link to='./support'>support</Link>
        </div>
        
      </div>
    </div>
  );
};

export default Nav;
