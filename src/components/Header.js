import React from 'react'
import './Header.css'

const Header = () => {
    
  return (
    <div>
      <header className="header">
        <nav>
          <div>
            <img
              className="logo"
              src="https://cdn.iconscout.com/icon/free/png-256/content-form-861767.png"
              alt=""
            />
          </div>
          <div className="searchbar">
            <img
              className="input_search"
              src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
              alt=""
            />
            <input type="text" className="search_input" />
          </div>

          <ul>
            <li>Home</li>
            <li>Service</li>
            <li>Products</li>
           
          </ul>
        </nav>
      </header>
      
    </div>
  );
}

export default Header
