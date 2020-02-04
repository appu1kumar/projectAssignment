import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <div className='wrap'>
      <div className='wrap-container'>
        <div className='header-images'>
          <img src='/logo.png' alt='image' className='brand-image' />
        </div>
        <div className='menu'>
          <ul>
            <li>
              <NavLink exact activeClassName='selected' to='/'>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='selected' to='/other1'>
                Other1
              </NavLink>
            </li>
            <li>
              <div className='search-box'>
                <input
                  type='text'
                  placeholder='Search...'
                  className='search-box-input'
                />
                <i className='fa fa-search'></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
