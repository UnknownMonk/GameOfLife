import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>Conway's Game Of Life</h1>
        <Link style={linkStyle} to="/">
          Home
        </Link>{' '}
        |{' '}
        <Link style={linkStyle} to="/rules">
          Rules
        </Link>
        |{' '}
        <Link style={linkStyle} to="/about">
          About
        </Link>
      </header>
    </div>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  marginBottom: '40px'
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
};
export default Header;
