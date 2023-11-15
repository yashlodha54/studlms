import React from 'react';
import './nav.css'; // Make sure to import your CSS file

const Header = () => {
  return (
    <header className="header">
    <nav className="navbar">
       <div>
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/stationary">Stationary</a></li>
        <li><a href="#about">About</a></li>
       </div>
       <div>
        <a href="/signup"><button className="button">Sign Up</button></a>
       </div>
    </nav>
</header>

  );
};

export default Header;
