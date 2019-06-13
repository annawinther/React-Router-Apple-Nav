import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const StyledNav = styled.div`
//     display: flex;
//     flex-direction: row;
// `;

const Nav = () => {
  return (
    <div>
      <div className="App">
        <h1>Apple Products</h1>
        <div className="navbar">
            <div className="link">
            <Link to='./mac'>Mac</Link>
            </div>
            <div  className="link">
            <Link to='./ipad'>iPad</Link>
            </div>
            <div  className="link">
            <Link to='./iphone'>iphone</Link>
            </div>
            <div  className="link">
            <Link to='./watch'>Watch</Link>
            </div>
            <div  className="link">
            <Link to='./tv'>TV</Link>
            </div>
            <div  className="link">
            <Link to='./music'>Music</Link>
            </div>
            <div  className="link">
            <Link to='./support'>support</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
