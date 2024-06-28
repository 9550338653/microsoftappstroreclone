import React, { useState } from 'react';
import './Dropdownmenu.css'

function DropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button className="logo-btn" onClick={toggleMenu}>
        LD
      </button>
      {isMenuOpen && (
        <div className="dropdown-menu">
          <a href="#">Name</a>
          <a href="#">Email</a>
          <a href="#">Phone no</a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
