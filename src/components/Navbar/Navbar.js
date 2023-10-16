import React from 'react';
import './Navbar.css'; 
import { FaSearch } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="greeting"> <span className="display-name">Hello,Sharuk &#x1F44B;</span></div>
      <div className="search-bar">
        <FaSearch className='search-icon'/>
        <input type="text" placeholder="Search" />
      </div>
      
    </div>
  );
};

export default Navbar;
